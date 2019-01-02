
function movePlayerTank(event)
{
  
     
    if(event.keyCode == 39) //right arrow
    {
        if(playerTanksList[playerTankIndex].position>0)
        {
        playerTanksList[playerTankIndex].position -=1;
        playerTankImage.style.right= playerTanksList[playerTankIndex].position +"%";
        }
    }
    else if(event.keyCode == 37) // left arrow
    {  
        if(playerTanksList[playerTankIndex].position<30)
        {
            playerTanksList[playerTankIndex].position +=1;
        playerTankImage.style.right= playerTanksList[playerTankIndex].position +"%";
        }
    }else if(event.keyCode == 32)  // space 
    {
       bulletFlame.style.display="block"; 
       setTimeout(hideShot,400);          
    }
 
    bullentFlamePos=playerTanksList[playerTankIndex].position+8
    bulletFlame.style.right=bullentFlamePos+"%"
}


You need to use the ended event

var audio = new Audio(),
    i = 0;
var playList = new Array('http://www.w3schools.com/htmL/horse.mp3', 'http://demos.w3avenue.com/html5-unleashed-tips-tricks-and-techniques/demo-audio.mp3');
var playProper= function (event.keycode) {
   // i = ++i < playlist.length ? i : 0;
   // console.log(i)
    if(event.keyCode==39)
    {
    audio.src = playList[0];
    audio.play();
    audio.loop = false;

    }
    else if (event.keyCode==37)
    {
        audio.src = playList[1];
        audio.play();
        audio.loop = false;

    }
    else if (even.keycode==32)
    {
        audio.src = playList[2];
        audio.play();
        audio.loop = false;

    }
    else 
    {
    audio.volume = 0.3;
    audio.loop = false;
    audio.src = playlist[4];  
    }
}

//audio.volume = 0.3;
audio.loop = false;
audio.src = playlist[0];
audio.play();

