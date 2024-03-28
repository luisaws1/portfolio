// JavaScript Document
let text = document.queryselector(".demo");
let opacity=0;



function fadeIn() {
	opacity += 0.005;
	text.styleopacity= opacity
	if (opacity<100){
		requestAnimationFrame(fadeIn);
	}
	
	
}
fadeIn();

function bigImg(x) {
  x.style.height = "500px";
  x.style.width = "500px";
}

function normalImg(x) {
  x.style.height = "auto";
  x.style.width = "auto";
}