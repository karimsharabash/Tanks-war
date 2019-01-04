function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

function soundByIndex(var n);
{
    if ( n == 0 ) //blast sound for 0 
    {
       var bastsound = new sound('sounds/Boom2.wav');
    } else if (n == 1) { // sound for movment 
        var movment = new sound('sounds/FX1.wav');
    } else if (n==2)
    {
       var shooting = new sound ('sounds/Percussion_24_SP.wav');
    }
}
 // this should be called soundByIndex(n).play()