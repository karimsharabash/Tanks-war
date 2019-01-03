var enemyBullet = document.getElementById("enemyBullet");
// var enemyTurn = false;
var enemyCurve=1800;

function enemyTurn()
{
    enemyBullet.style.display="block";
    enemyBullet.classList.add("enemyBulletCurve"); 
    enemyCurve=2000+((Math.random()*10)*100);
    enemyBullet.style.transformOrigin=enemyCurve +"% 250%";

    setTimeout(initEnemyBullet,4000);
}


function  initEnemyBullet()
{  
    enemyBullet.style.display="none";
    enemyBullet.classList.remove("enemyBulletCurve");
    // enemyTurn =false ;
}