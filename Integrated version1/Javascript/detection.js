/// position of the bullet >postion of the tank & < postion of the tank +8 
var playerBulletRange = 0;
var enemyBulletRange = 0;
var enemyHit =0;
function detectEnemyCollision()
{   
 playerBulletRange = ( - curve/32) + bullentFlamePos;
 // console.log(playerBulletRange);
 playerBulletRange-= enemyTanksList[enemyTankIndex].position ;
 console.log(playerBulletRange);
 //call the after collision function for enemy
 if(playerBulletRange>=0 && playerBulletRange<=8)
 {
    enemyHit=1;
    
 }
}


function detectPlayerCollision()
{
    enemyBulletRange = enemyTanksList[enemyTankIndex].position - (enemyCurve/33.6);
    // console.log(playerBulletRange);
    //bulletflamepos is the position of the player bullet which is the position of first point of the player tank 
    enemyBulletRange-= playerTanksList[playerTankIndex].position ; 
    console.log(enemyBulletRange);
    //call the after collision function for player  
    //if(enemyBulletRange>=0 && enemyBulletRange<=8)
}