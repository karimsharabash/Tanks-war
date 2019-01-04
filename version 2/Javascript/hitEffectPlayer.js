///////////////////////////////////////////////
// function to calculate damage for player
var healthBarWidthPlayer = document.getElementById('healthBar');
var healthPlayer = 80; ///## changhe to 80 

var hitValue=0;
var modal = document.getElementById('gameOverModal');
var span = document.getElementsByClassName("close")[0];
var gameOverSound = new sound(" ../sound/gameOverSound.mp3");
function aliveOrNotPlayer()
{
    if (healthPlayer!=0)
        return true;
    else 
        { openGameOverModal();}
}
function hitEffectPlayer()
{
    
if(aliveOrNotPlayer)
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
}
healthBarWidthPlayer.style.width=healthPlayer+"%"
}

function openGameOverModal()
{

modal.style.display = "block";
gameOverSound.play();
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}