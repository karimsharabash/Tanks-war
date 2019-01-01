var lvlindex=0;
var passedchar =0;
if( passedchar ==1) console.log("hi");



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

}

var lvlprev=document.getElementById("lvlprev");
lvlprev.addEventListener('click', lvlprevious);