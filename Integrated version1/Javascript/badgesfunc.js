var missedShots=0;
roundPoints=0;
points=0;
score=0;


function gameBadge()
{

          points=roundScore(totalShotsCount, successScore);
          score+=points;

     if(score>=45)
     {
     document.getElementById("badge1").style.opacity="1";
     document.getElementById("badge2").style.opacity="1";
     document.getElementById("badge3").style.opacity="1";
     document.getElementById("badge4").style.opacity="1";
     }

     else if (score >=20 && score < 45)
     {
     document.getElementById("badge1").style.opacity="1";
     document.getElementById("badge2").style.opacity="1";
     document.getElementById("badge3").style.opacity="1";
     document.getElementById("badge4").style.opacity="0.5";
     }
     else
     {
     document.getElementById("badge1").style.opacity="1";
     document.getElementById("badge2").style.opacity="0.5";
     document.getElementById("badge3").style.opacity="0.5";
     document.getElementById("badge4").style.opacity="0.5";
     }

     roundPoints=0;
     points=0;
     score=0;



}


function roundScore (totalShotsCount , successScore)
{

     missedShots=(totalShotsCount-successScore)*10/100;

if (missedShots<=(20/100))
{
roundPoints=9;
}

else if ((missedShots>(20/100)) && (missedShots<=(55/100)))
{
     roundPoints=6;
}

else
{
     roundPoints=3;

}

     return roundPoints;

}

// gameBadge();


var badgeWindow=document.getElementById("badgeModal");
var spanBadge=document.getElementById("closeBadge");
var badge1Desc=document.getElementById("badge1");
var badge2Desc=document.getElementById("badge2");
var badge3Desc=document.getElementById("badge3");
var badge4Desc=document.getElementById("badge4");

function DisplayBadge1()
{
     badgeWindow.style.display="block";
     document.getElementById("badgeDesc").textContent="This badge only for playing a game with us";
}


function DisplayBadge2()
{
     badgeWindow.style.display="block";
     document.getElementById("badgeDesc").textContent="If you took this badge then you are a good SHOOTER!";
}

function DisplayBadge3()
{
     badgeWindow.style.display="block";
     document.getElementById("badgeDesc").textContent="You are a FIGHTER !";
}

function DisplayBadge4()
{
     badgeWindow.style.display="block";
     document.getElementById("badgeDesc").textContent="You are extremely GORGEOUS!";
}


function HideBadge()
{
     badgeWindow.style.display="none";
}

badge1Desc.addEventListener('click', DisplayBadge1);
badge2Desc.addEventListener('click', DisplayBadge2);
badge3Desc.addEventListener('click', DisplayBadge3);
badge4Desc.addEventListener('click', DisplayBadge4);

spanBadge.addEventListener('click',HideBadge);