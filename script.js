var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";				// Here we are outputting in text form what we want. In this case it is the background style of the body as it's changes are loaded plus we add a semi colon at the end.
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);