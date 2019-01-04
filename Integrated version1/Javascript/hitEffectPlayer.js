///////////////////////////////////////////////
// function to calculate damage 
var healthBarWidth = getElementById('healthBar').width;
var health = 80; ///## changhe to 80 
var levelIndex = 0;
var hitValue =0;
function aliveOrNot()
{
    if (health!=0)
        return true;
    else 
        return false
}
function hitEffect()
{
    
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
