var success=0;
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}


var collisionFlame=document.getElementById("collisionFlame");
var collisionPos;
function playerHitEnemy()
{
success++;
hitSound = new sound("../sound/e.mp3");
hitSound.play();
collisionPos=enemyTanksList[enemyTankIndex].bottom;
collisionFlame.style.bottom=collisionPos;
setTimeout(showCollision,200);
hideCollision();
}

function hideCollision()
{
    collisionFlame.style.display="none"; 
    
}
function showCollision()
{
    collisionFlame.style.display="block"; 
    
}