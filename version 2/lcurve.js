// Aiming curve
theCanvas = document.getElementById("aimCanvas");
ctx = theCanvas.getContext("2d")
ctx.lineWidth = 6;
ctx.strokeStyle = "#347";
ctx.beginPath();
ctx.moveTo(115, 158);
ctx.quadraticCurveTo(382, 255, 500, 500);
ctx.stroke();

// Rotate aim
var aimCurve = document.getElementById("aimCanvas");
var styles;
var border = 29;
var rotateInc = 1.5;
function rotateAim(e) {

	var styles = window.getComputedStyle(aimCurve, null);

	var transform = styles.getPropertyValue("-webkit-transform") ||
			        styles.getPropertyValue("-moz-transform") ||
			        styles.getPropertyValue("-ms-transform") ||
			        styles.getPropertyValue("-o-transform") ||
			        styles.getPropertyValue("transform") ||
			        "Either no transform set, or browser doesn't do getComputedStyle";

	var values = transform.split('(')[1],
		values = values.split(')')[0],
	    values = values.split(',');
    var a = values[0];
	var b = values[1];
	var c = values[2];
	var d = values[3];

	var rotateAngle = Math.round(Math.asin(b) * (180/Math.PI));

	switch(e.keyCode) {
		case 38 : // Up arrow
			{
				rotateAngle > border ? '' : aimCurve.style.transform = 'rotate(' + (rotateAngle += rotateInc) + 'deg)'; 
			}
		break;

		case 40 : // Down arrow
			{
				rotateAngle < -border ? '' : aimCurve.style.transform = 'rotate(' + (rotateAngle -= rotateInc) + 'deg)';
			}
		break;
	}
}

document.addEventListener('keydown', rotateAim);