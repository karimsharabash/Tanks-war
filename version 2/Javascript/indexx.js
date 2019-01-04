var interval=0;
var creditsButton=document.getElementById("creditsBtn");
var goToPage2=document.getElementById("usrBtn");
var goToPage3=document.getElementById("battleBtn");
var creditsWindow=document.getElementById("creditsModal");
var spanCredits=document.getElementById("closeCredits");
var creditsImg=document.getElementById("creditsImg");
var playerName=document.getElementById("userName");
var story = document.getElementById("storyModal");
var spanStory=document.getElementById("closeStory");
var storyImg=document.getElementById("storyImg");
var i = 0;
var storyTxt = 'We developed Tanks War as a single player Version of the Famous game World of tanks which is a multiplayer game developed by Belarusian company Wargaming';
var speed = 100;


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

function DisplayStory()
{   
    StoryWriter();
    story.style.display="block";
}

function HideStory()
{
    story.style.display="none";
}

storyImg.addEventListener('click', DisplayStory);
spanStory.addEventListener('click',HideStory);


function StoryWriter() {
  if (i < storyTxt.length) {
    document.getElementById("storyTxt").textContent += storyTxt.charAt(i);
    i++;
    setTimeout(StoryWriter, speed);
  }
}



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
    document.getElementById("badge1").style.opacity="1";
    document.getElementById("bgdiv").style.display="none";
    document.getElementById("page3").style.display="block";
    document.getElementById("characterName").textContent=playerName.value;
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
            document.getElementById("bgPlay").style.opacity="1";
            break;
        }
    }

    flag++;

}



goToPage3.addEventListener('click', page3);
