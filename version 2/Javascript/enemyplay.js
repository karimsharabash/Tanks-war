

var enemyBullet = document.getElementById("enemyBullet");
// var enemyTurn = false;
var enemyCurve=1800;
var levelIndex =0;

function enemyTurn()
{
    enemyBullet.style.right=enemyTanksList[enemyTankIndex].position +"%";
    switch(levelIndex)
    {
       
        case 0: //easy level the computer fire randomly
        enemyCurve=2000+((Math.random()*10)*100);
        break;
        case 1://medium level the computer fire randomly but the range of fire is reduced according to the position of the player tank 
        enemyCurve = ((enemyTanksList[enemyTankIndex].position - playerTanksList[playerTankIndex].position - 8 )+ (Math.random()*25 ) ) * 31 ;
        break
        case 2: //hard level the computer fire randomly but the range of fire is extermely reduced according the position of to the player tank 
        enemyCurve = ((enemyTanksList[enemyTankIndex].position - playerTanksList[playerTankIndex].position - 4 )+ (Math.random()*20 ) ) * 31 ;
        break;
    }
    
    enemyBullet.style.transformOrigin=enemyCurve +"% 250%";
    enemyBullet.style.display="block";
    enemyBullet.classList.add("enemyBulletCurve"); 
    setTimeout(initEnemyBullet,3800);
}


function  initEnemyBullet()
{  
    enemyBullet.style.display="none";
    enemyBullet.classList.remove("enemyBulletCurve");
    detectPlayerCollision();
    // enemyTurn =false ;
}


function enemyMove()
{
    switch(levelIndex)
    {
        case 0://for the easy and medium level move to random place when it get hit by player bullet
        case 1:
        if(enemyHitForMoving)
        {
            enemyTanksList[enemyTankIndex].position=92-((Math.random()*100)%30);
        }
        break;
        case 2://move after every shot
            enemyTanksList[enemyTankIndex].position=92-((Math.random()*100)%30);
        break;

    }
    enemyTankImage.style.right=enemyTanksList[enemyTankIndex].position+"%";
     setTimeout(enemyTurn,200);
     enemyHitForMoving=0;
}