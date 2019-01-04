///////////////////////////////////////////////
// function to calculate damage for the enimy and move the health bar 
var healthBarWidthEnemy = getElementById('enemyhealthBar').width;
var healthEnemy = 80;
var levelIndex = 1;
hitValueEnemy =0;
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


switch(levelIndex){

case 1:
    hitValueEnemy=10;
    healthEnemy-=hitValueEnemy;
    healthBarWidthEnemy-=hitValueEnemy+"%";
    break;
case 2: 
    hitValueEnemy=20;
    healthEnemy-=hitValueEnemy;
    healthBarWidthEnemy-=hitValueEnemy+"%";
    break;
case 3: 
    hitValueEnemy=40;
    health-=hitValueEnemy;
    healthBarWidthEnemy-=hitValueEnemy+"%";
    break;
}
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