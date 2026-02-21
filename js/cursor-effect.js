const CURSORBLOCK_HEIGHT = CURSORBLOCK_WIDTH = 20;
//const CURSORBLOCK_WIDTH = 250;

var html = document.querySelector("html");
var cursorBlock = document.querySelector("#cursor-effect");

function followCursor(e) {
	cursorBlock.style.left = (e.clientX - CURSORBLOCK_WIDTH / 2).toString() + "px";
	cursorBlock.style.top = (e.clientY - CURSORBLOCK_HEIGHT / 2).toString() + "px";
}

document.addEventListener("mousemove", function(e) {
	if (smin1280.matches)
		followCursor(e);

});
html.addEventListener("mouseover", function() {
	if (smin1280.matches) {
		cursorBlock.style.display = "block";
	}
});
html.addEventListener("mouseout", function() {
	cursorBlock.style.display = "none";
});