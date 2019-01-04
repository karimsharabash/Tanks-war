///////////////////////////////////////////////
// function to calculate damage for the enimy and move the health bar 
var healthBarWidth = getElementById('enemyhealthBar').width;
var health = 100;
var levelIndex = 0;
var hitValue =0;
if (levelIndex==0)
/*{
    hitValue=10;
    health.style.width-10%;
    health-=hitValue;
    if (health==0) {
        function gameOver();
    }
}
*/
function aliveOrNot()
{
    if (health!=0)
        return true;
    else 
        return false
}
function hitEffectEnimy(){
    
if(aliveOrNot)
{
    
switch(levelIndex){

case 1:
    hitValue=10;
    health-=hitValue;
    healthBarWidth-=hitValue;
    break;
case 2: 
    hitValue=20;
    health-=hitValue;
    healthBarWidth-=hitValue;
    break;
case 3: 
    hitValue=40;
    health-=hitValue;
    healthBarWidth-=hitValue;
    break;
}
}
}
