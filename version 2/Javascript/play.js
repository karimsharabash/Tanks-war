var playerTankImage =document.getElementById("myCharacter");
var enemyTankImage  =document.getElementById("enemyTank");
var bulletPath = document.getElementById("playerBullet");
var curve=-2500;
var bulletFired=0;
var flag=0;
var totalShotsCount=0;

var tank = function (id,positionX,img,$size,positionY,toFlip )
{
    this.id=id;  
    this.position=positionX ; //the default position0
    this.image=img ;
    this.size=$size;
    this.height=positionY;
    this.flipOrNot=toFlip;     
}
///////////////////////
////////////player tanks attributes///////////
var tank1 =  new tank(0,5,"../images/tank1.png","15%","12%",true);
var tank2 =  new tank(1,5,"../images/tank2.png","23%","9%",true);
var tank3 = new tank(2,5,"../images/tank3.png","17%","12%",false);
var playerTanksList=[ tank1,tank2,tank3];                // array of tank objects for the player character tanks
// var playerTankIndex =1;
var playerTankIndex =chosenChar;
//  here the function for changing the character 
definePlayerTank();
/////////////////////////////////////////////////
///////////////enemy tanks attributes////////////
var enemyTank1 =  new tank(3,88,"../images/enemytank1.png","23%","7%",true);
var enemyTank2 =  new tank(4,88,"../images/enemytank2.png","13%","13%",false);
var enemyTank3 = new tank(5,88,"../images/enemytank3.png","16%","13%",true);
var enemyTanksList=[ enemyTank1,enemyTank2,enemyTank3];                // array of tank objects for the player character tanks
var enemyTankIndex =1;
defineEnmeyTank();
//////////////////////////////////////////////

var bulletFlame=document.getElementById("bulletFlame");
var bullentFlamePos = playerTanksList[playerTankIndex].position+8;

var enemyBulletFlame =document.getElementById("enemyBulletFlame");
var enemyBulletFlamePos ; //should be changed when the enemy tank move ####

document.addEventListener("keyup",movePlayerTank);

function definePlayerTank()
{
    playerTankImage.src =  playerTanksList[playerTankIndex].image;
    playerTankImage.style.right=playerTanksList[playerTankIndex].position+"%";
    playerTankImage.style.height=playerTanksList[playerTankIndex].size;
    playerTankImage.style.bottom=playerTanksList[playerTankIndex].height;
    if(playerTanksList[playerTankIndex].flipOrNot)
    {
        playerTankImage.style.transform= "rotateY(180deg)";
    }
}

function defineEnmeyTank()
{
    enemyTankImage.src =  enemyTanksList[enemyTankIndex].image;
    enemyTankImage.style.right=enemyTanksList[enemyTankIndex].position+"%";
    enemyTankImage.style.height=enemyTanksList[enemyTankIndex].size;
    enemyTankImage.style.bottom=enemyTanksList[enemyTankIndex].height;
    if(enemyTanksList[enemyTankIndex].flipOrNot)
    {
        enemyTankImage.style.transform= "rotateY(180deg)";
    }
}

function movePlayerTank(event)
{
  
     
    switch(event.keyCode)
    {
    case 39: //right arrow
        if(playerTanksList[playerTankIndex].position>0)
        {
        playerTanksList[playerTankIndex].position -=1;
        playerTankImage.style.right= playerTanksList[playerTankIndex].position +"%";
        }
    break;
    case 37: // left arrow
     
        if(playerTanksList[playerTankIndex].position<30)
        {
            playerTanksList[playerTankIndex].position +=1;
        playerTankImage.style.right= playerTanksList[playerTankIndex].position +"%";
        }   
    break;
    case 38 : //up arrrow
      if(bulletFired ==0)
      {
       curve-=100;
       bulletPath.style.transformOrigin=curve +"% 250%";
      }
    break;
    case 40: //down arrow 
    if(bulletFired ==0)
    {
     curve+=150;
     bulletPath.style.transformOrigin=curve +"% 250%";
     
    }    break;
    case 32:  // space
    bulletPath.style.right =bullentFlamePos+"%"; 
    bulletPath.style.display="block";
       bulletPath.classList.add("bulletCurve")
       bulletFlame.style.display="block"; 
       setTimeout(hideShot,200);
       if(bulletFired ==0)
       {
       setTimeout(initBulletCurve,3400);
       bulletFired=1;
       }
       totalShotsCount++; 
       detectEnemyCollision();
    break;
    } 
    bullentFlamePos=playerTanksList[playerTankIndex].position+8
    bulletFlame.style.right=bullentFlamePos+"%";

}


function hideShot()
{
    bulletFlame.style.display="none"; 
    
}

function initBulletCurve()
{
    bulletPath.style.display="none";
    bulletPath.classList.remove("bulletCurve");
    bulletFired=0;
    if(enemyHit)
    {
        playerHitEnemy();
        enemyHit=0;
    }
    enemyTurn();
    
}
///////////////////////////////////////////////

