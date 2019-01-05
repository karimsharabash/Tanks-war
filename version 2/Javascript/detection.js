/// position of the bullet >postion of the tank & < postion of the tank +8 
var playerBulletRange = 0;
var enemyBulletRange = 0;
var enemyHit =0;
var enemyHitForMoving=0;//here
function detectEnemyCollision()
{   
 playerBulletRange = ( - curve/33) + bulletFlamePos; //here
 // console.log(playerBulletRange);
 playerBulletRange-= enemyTanksList[enemyTankIndex].position ;
//  console.log(playerBulletRange);
 //call the after collision function for enemy
 if(playerBulletRange>=0 && playerBulletRange<=8)
 {
    enemyHit=1;
    enemyHitForMoving=1;
 }
}


function detectPlayerCollision()
{
    enemyBulletRange = enemyTanksList[enemyTankIndex].position - (enemyCurve/35);
    // console.log(playerBulletRange);
    //bulletflamepos is the position of the player bullet which is the position of first point of the player tank 
    enemyBulletRange-= playerTanksList[playerTankIndex].position ; 
    console.log(enemyBulletRange);
    //call the after collision function for player  
    if(enemyBulletRange>=0 && enemyBulletRange<=8)
    {
        enemyHitPlayer();
    }
}