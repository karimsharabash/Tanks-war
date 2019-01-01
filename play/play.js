var playerTankImage =document.getElementById("myCharacter");
var enemyTankImage  =document.getElementById("enemyTank");
var flag=0;
function beginGame()
{
    switch(flag)
    {
        case 0:
        {
            document.getElementById("begImg").src="number3.png";
           break;
        }
        case 1:
        { 
            document.getElementById("begImg").src="number2.png";  
           break;
        }
        case 2:
        {
            document.getElementById("begImg").src="number1.png";  
            break;
        }
        case 3:
        {
            clearInterval(interval);
            document.getElementById("begImg").style.display="none";
            document.getElementById("bg").style.opacity="1";
            break;
        }
    }

    flag++;

}

var interval =setInterval(beginGame, 850);
///////////////////////////////////////////////////

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
var tank1 =  new tank(0,5,"tanks/tank1.png","15%","12%",true);
var tank2 =  new tank(1,5,"tanks/tank2.png","23%","9%",true);
var tank3 = new tank(2,5,"tanks/tank3.png","17%","12%",false);
var playerTanksList=[ tank1,tank2,tank3];                // array of tank objects for the player character tanks
var playerTankIndex =0;
definePlayerTank();
/////////////////////////////////////////////////
///////////////enemy tanks attributes////////////
var enemyTank1 =  new tank(3,88,"tanks/enemytank1.png","23%","7%",true);
var enemyTank2 =  new tank(4,88,"tanks/enemytank2.png","13%","13%",false);
var enemyTank3 = new tank(5,88,"tanks/enemytank3.png","16%","13%",true);
var enemyTanksList=[ enemyTank1,enemyTank2,enemyTank3];                // array of tank objects for the player character tanks
var enemyTankIndex =2;
defineEnmeyTank();
//////////////////////////////////////////////

var bulletFlame=document.getElementById("bulletFlame");
var bullentFlamePos;

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
  
     
    if(event.keyCode == 39) //right arrow
    {
        if(playerTanksList[playerTankIndex].position>0)
        {
        playerTanksList[playerTankIndex].position -=1;
        playerTankImage.style.right= playerTanksList[playerTankIndex].position +"%";
        }
    }
    else if(event.keyCode == 37) // left arrow
    {  
        if(playerTanksList[playerTankIndex].position<30)
        {
            playerTanksList[playerTankIndex].position +=1;
        playerTankImage.style.right= playerTanksList[playerTankIndex].position +"%";
        }
    }else if(event.keyCode == 32)  // space 
    {
       bulletFlame.style.display="block"; 
       setTimeout(hideShot,400);          
    }
 
    bullentFlamePos=playerTanksList[playerTankIndex].position+8
    bulletFlame.style.right=bullentFlamePos+"%"
}


function hideShot()
{
    bulletFlame.style.display="none"; 
}

///////////////////////////////////////////////
