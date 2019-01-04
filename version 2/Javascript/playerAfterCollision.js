var playerFail=0;
var collisionFlamePlayer=document.getElementById("collisionFlame");
var collisionPosPlayer;
function enemyHitPlayer()
{
 playerFail++;
 hitSound.play();
 collisionPosPlayer=playerTanksList[playerTankIndex].position;
 collisionFlamePlayer.style.right=collisionPosPlayer +"%";
 setTimeout(hideCollisionPlayer,300); 
 showCollisionPlayer();
 hitEffectPlayer();
}

function hideCollisionPlayer()
{
    collisionFlamePlayer.style.display="none"; 
    
}
function showCollisionPlayer()
{
    collisionFlamePlayer.style.display="block"; 
    
}