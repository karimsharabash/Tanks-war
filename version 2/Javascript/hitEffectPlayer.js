///////////////////////////////////////////////
// function to calculate damage for player
var healthBarWidthPlayer = getElementById('healthBar').width;
var healthPlayer = 80; ///## changhe to 80 
var levelIndex = 1;
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

case 1:
    hitValue=10;
    healthPlayer-=hitValue;
    healthBarWidthPlayer-=hitValue+"%";
    break;
case 2: 
    hitValue=20;
    healthPlayer-=hitValue;
    healthBarWidthPlayer-=hitValue+"%";
    break;
case 3: 
    hitValue=40;
    healthPlayer-=hitValue;
    healthBarWidthPlayer-=hitValue+"%";
    break;
}
}
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