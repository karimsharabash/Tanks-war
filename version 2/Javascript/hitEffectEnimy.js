
///////////////////////////////////////////////
// function to calculate damage for the enimy and move the health bar 
var healthBarWidthEnemy = document.getElementById('enemyhealthBar');
var healthEnemy = 80;
var hitValueEnemy =0;
var modal1 = document.getElementById('youWinModal');
var span1 = document.getElementsByClassName("close1")[0];
var youWinSound = new sound(" ../sound/winSound.mp3");

// function aliveOrNotEnemy()
// {
//     if (healthEnemy!=0)
//         return true;
//     else 
//        { openYouWinModal();}
// }


function hitEffectEnemy(){    
if(healthEnemy>0)
{
  
     switch(levelIndex)
     {

    case 0:
    hitValueEnemy=30;
    healthEnemy-=hitValueEnemy;
   
    break;
    case 1: 
    hitValueEnemy=25;
    healthEnemy-=hitValueEnemy;
   
    break;
    case 2: 
    hitValueEnemy=20;
    healthEnemy-=hitValueEnemy;

    break;
}
  if(healthEnemy <=0) 
  {
    healthEnemy =0;
    openYouWinModal();

  }
  healthBarWidthEnemy.style.width=healthEnemy+"%";

}
else
{
  openYouWinModal();
}

}
function openYouWinModal()
{

 document.getElementById("bgPlay").src= "../images/win.png";
 document.getElementById("bgPlay").style.zIndex="2";
 playingSound.pause();
youWinSound.play();
gameBadge();
healthEnemy = 80;
healthBarWidthEnemy.style.width=healthEnemy+"%";
healthPlayer = 80;
healthBarWidthPlayer.style.width=healthPlayer+"%";
setTimeout(BackToPage2,500);
// playingSound.pause();

}

