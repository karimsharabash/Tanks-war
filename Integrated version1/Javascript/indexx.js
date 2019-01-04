var interval=0;
var creditsButton=document.getElementById("creditsBtn");
var goToPage2=document.getElementById("usrBtn");
var goToPage3=document.getElementById("battleBtn");
var creditsWindow=document.getElementById("creditsModal");
var spanCredits=document.getElementById("closeCredits");
var creditsImg=document.getElementById("creditsImg");
var playerName=document.getElementById("userName");




function DisplayCredits()
{
    creditsWindow.style.display="block";
}

function HideCredits()
{
    creditsWindow.style.display="none";
}

creditsImg.addEventListener('click', DisplayCredits);
spanCredits.addEventListener('click',HideCredits);






function page2()
{
   if (playerName.value=="")
   {
       document.getElementById("usrValidate").textContent="please enter a username";
   }
   else
   {
    document.getElementById("playerName").textContent="Welcome "+playerName.value +" To the Battle";
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="block";
   }
}

goToPage2.addEventListener('click',page2);


function page3()
{
    document.getElementById("bgdiv").style.display="none";
    document.getElementById("page3").style.display="block";
    interval =setInterval(beginGame, 850);

}

function beginGame()
{
    switch(flag)
    {
        case 0:
        {
            document.getElementById("begImg").style.display="block";
            document.getElementById("begImg").src="../images/number3.png";
        
           break;
        }
        case 1:
        { 
            document.getElementById("begImg").style.display="block";
            document.getElementById("begImg").src="../images/number2.png";  
           break;
        }
        case 2:
        {
            document.getElementById("begImg").style.display="block";
            document.getElementById("begImg").src="../images/number1.png";  
            break;
        }
        case 3:
        {
            clearInterval(interval);
            document.getElementById("begImg").style.display="none";
            document.getElementById("page3").style.opacity="1";
            break;
        }
    }

    flag++;

}



goToPage3.addEventListener('click', page3);
