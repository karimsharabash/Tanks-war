///////////////////////////////////////////////
// function to calculate damage for the enimy and move the health bar 
var healthBarWidthEnemy = document.getElementById('enemyhealthBar');
var healthEnemy = 80;
var hitValueEnemy =0;
var modal1 = document.getElementById('youWinModal');
var span1 = document.getElementsByClassName("close1")[0];
var youWinSound = new sound(" ../sound/winSound.mp3");

function aliveOrNotEnemy()
{
    if (healthEnemy!=0)
        return true;
    else 
        
          { openYouWinModal();}
}
function hitEffectEnemy(){    
if(aliveOrNotEnemy){

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
  healthBarWidthEnemy.style.width=healthEnemy+"%";

}

}
function openYouWinModal()
{

modal1.style.display = "block";
youWinSound.play();
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
}