

var enemyBullet = document.getElementById("enemyBullet");
// var enemyTurn = false;
var enemyCurve=1800;
var levelIndex =2;

function enemyTurn()
{
 
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