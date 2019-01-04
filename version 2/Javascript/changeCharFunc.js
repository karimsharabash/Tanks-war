

function chooseChar()
{
  
var playerTankIndex =charindex;
definePlayerTank();
}

var charBtn=document.getElementById("charDoneBtn");
charBtn.addEventListener('click', chooseChar);



function chooseLvl()
{
    switch(levelIndex)
    {
        case 0:
        {
            document.getElementById("bgPlay").src="../images/game_bg1.jpg";
            break;
        }
        case 1:
        {
            document.getElementById("bgPlay").src="../images/game_bg2.png";
            break;
        }
        case 2:
        {
            document.getElementById("bgPlay").src="../images/game_bg3.jpg";
            break;
        }

    }  

}

var lvlBtn=document.getElementById("lvlDoneBtn");
lvlBtn.addEventListener('click',chooseLvl);