var interval=0;
var creditsModal = document.getElementById("creditsModal");
// var closeSpan = document.getElementsById("closeCredits");
var creditsButton=document.getElementById("creditsBtn");
var goToPage2=document.getElementById("usrBtn");
var userName=document.getElementById("userName").Value;
var goToPage3=document.getElementById("battleBtn");

creditsButton.onclick=function () {
      
    creditsModal.style.display = "block";
  
  }

//   closeSpan.onclick = function() {
//     creditsModal.style.display = "none";
//   }
  
  window.onclick = function(event) {
    if (event.target == creditsModal) {
      creditsModal.style.display = "none";
    }
  }






function page2()
{
   
    document.getElementById("page1").style.display="none";
    document.getElementById("page2").style.display="block";
    
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
            document.getElementById("begImg").src="../images/number3.png";
           break;
        }
        case 1:
        { 
            document.getElementById("begImg").src="../images/number2.png";  
           break;
        }
        case 2:
        {
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
