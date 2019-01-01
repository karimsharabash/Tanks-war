var charindex=0;
passedchar=0;
    
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



function charnext()
{
    charslideshow();
    passedchar=charindex;
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
    passedchar=charindex;
}
var charprev = document.getElementById("charprev");
charprev.addEventListener('click',charprevious);





function donebtn()
{
    document.getElementById("charparag").textContent="now go and choose your level";
}

var done=document.getElementById("charbtn");
done.addEventListener('click', donebtn);


