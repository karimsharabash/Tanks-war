var success=0;
var collisionFlamePlayer=document.getElementById("collisionFlamePlayer");
var collisionPos;
function EnemyHitPlayer()
{
success++;
hitSound = new sound("../sounds/explosion.wav");
hitSound.play();
collisionPos=playerTanksList[playerTankIndex].bottom;
collisionFlamePlayer.style.bottom=collisionPos;
setTimeout(showCollision,200);
hideCollision();
}

function hideCollision()
{
    collisionFlamePlayer.style.display="none"; 
    
}
function showCollision()
{
    collisionFlamePlayer.style.display="block"; 
    
}