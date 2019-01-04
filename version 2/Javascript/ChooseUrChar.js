var charindex=0;
var lvlindex=0;
var htpModal = document.getElementById("htpModal");
var spanHtp=document.getElementById("closeHtp");
var htpImg=document.getElementById("htpImg");
chosenChar=0;
levelIndex=0;
    
function charslideshow()
{
   
    var slides = document.getElementsByClassName("tanks");
    var i;

for (i=0; i< slides.length; i++)
{

    slides[i].style.display = "none"; 
}
charindex++;
if (charindex >= slides.length) 
{charindex = 0}  

slides[charindex].style.display = "block"; 

}

//change this playerTankIndex

function charnext()
{
    charslideshow();
    chosenChar=charindex;
   
}

var charnextt = document.getElementById("charnxt");
charnextt.addEventListener('click',charnext);

function charprevious()
{
    var i;
    var slides = document.getElementsByClassName("tanks");
    for (i=0; i< slides.length; i++)
    {
    
        slides[i].style.display = "none"; 
    }
    charindex--;
    if (charindex <0) 
    {charindex = 2}  
    slides[charindex].style.display = "block"; 
    chosenChar=charindex;
    
}

var charprev = document.getElementById("charprev");
charprev.addEventListener('click',charprevious);



function lvlslideshow()
{

    var lvlslides=document.getElementsByClassName("levels");
    var i;

    for(i=0 ; i<lvlslides.length; i++)
    {
        lvlslides[lvlindex].style.display="none";
    }

    lvlindex++;

    if(lvlindex>=lvlslides.length)
    {
        lvlindex=0;
    }

    lvlslides[lvlindex].style.display="block";
    
}

function lvlnext()
{
    lvlslideshow();
    levelIndex=lvlindex;
}

var lvlnxt=document.getElementById("lvlnxt");
lvlnxt.addEventListener('click',lvlnext);

function lvlprevious()
{
    var lvlslides=document.getElementsByClassName("levels");
    var i;

    for(i=0 ; i<lvlslides.length; i++)
    {
        lvlslides[lvlindex].style.display="none";

    }

    lvlindex--;
    if(lvlindex <0)
    {
        lvlindex=2;
    }

    lvlslides[lvlindex].style.display="block";
    levelIndex=lvlindex;

}

var lvlprev=document.getElementById("lvlprev");
lvlprev.addEventListener('click', lvlprevious);


function DisplayHtp()
{
    htpModal.style.display="block";
}

function HideModal()
{
    htpModal.style.display="none";
}

htpImg.addEventListener('click',DisplayHtp);
spanHtp.addEventListener('click' ,HideModal);

