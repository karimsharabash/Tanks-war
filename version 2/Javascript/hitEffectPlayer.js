///////////////////////////////////////////////
// function to calculate damage for player
var healthBarWidthPlayer = document.getElementById('healthBar');
var healthPlayer = 80; ///## changhe to 80 

var hitValue=0;

var gameOverSound = new sound(" ../sound/gameOverSound.mp3");
// function aliveOrNotPlayer()
// {
//     if (healthPlayer!=0)
//         return true;
//     else 
//         { openGameOverModal();}
// }
function hitEffectPlayer()
{
    
if(healthPlayer>0)
{
    
switch(levelIndex){

case 0:
    hitValue=20;
    healthPlayer-=hitValue;

    break;
case 1: 
    hitValue=30;
    healthPlayer-=hitValue;
   
    break;
case 2: 
    hitValue=35;
    healthPlayer-=hitValue;
 
    break;
}
if(healthPlayer <=0)
{
    openGameOverModal();
    healthPlayer=0;
}
}

healthBarWidthPlayer.style.width=healthPlayer+"%"
}

function openGameOverModal()
{

    document.getElementById("bgPlay").src= "../images/gameOver.png";
    document.getElementById("bgPlay").style.zIndex="2";
    playingSound.pause();
    gameOverSound.play();
    gameBadge();
    healthPlayer = 80;
    healthBarWidthPlayer.style.width=healthPlayer+"%"
    healthEnemy = 80;
    healthBarWidthEnemy.style.width=healthEnemy+"%";
   setTimeout(BackToPage2,500);
  
}

