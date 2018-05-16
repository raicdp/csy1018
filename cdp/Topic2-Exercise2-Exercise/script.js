function moveLeft(){
	var circle = document.getElementById('circle');
	var currentLeft = circle.offsetLeft;
	if(currentLeft == -200){
		circle.style.left = window.innerWidth + 'px';
	}
	else
		circle.style.left = currentLeft - 1 + 'px';
}
function moveRight(){
	var circle = document.getElementById('circle');
	var currentLeft = circle.offsetLeft;
	if(window.innerWidth == currentLeft){
		circle.style.left = 0;
		
	}
	else
		circle.style.left = currentLeft + 1 + 'px';
	
}
function moveUp(){
	var circle = document.getElementById('circle');
	var currentTop = circle.offsetTop;
	if(currentTop == 0){
	
	
	 circle.style.up = window.innerHeight + 'px';
}
    else
	circle.style.top = currentTop - 1 + 'px';

	
}
function moveDown(){
	var circle = document.getElementById('circle');
	var currentTop = circle.offsetTop;
	if(window.innerHeight == currentTop + 200){
		clearInterval(interval);
		 interval = setInterval(moveUp,1);
	}

	else
	circle.style.top = currentTop + 1 + 'px';
	
}
var interval;
var leftPressed = false;
var rightPressed = false;
var topPressed = false;
var downPressed = false;
function myKeyDown(event){
	
	if(event.keyCode == 37)
		leftPressed = true;

	if(event.keyCode == 39)
		rightPressed = true;

	if(event.keyCode == 38)
		topPressed = true;

	if(event.keyCode == 40)
		downPressed = true;
}






/*function myLoad(){
	var circle = document.getElementById('circle');
	circle.addEventListener('click', clickFunction);


}










function changeOpacity(){
	var circle = document.getElementById('circle');
	var currentOpacity = parseFloat(circle.style.opacity);
	if(currentOpacity <1 ){
		circle.style.opacity = currentOpacity + 0.1;
	}
	

}
function clickFunction(){
	setInterval(changeOpacity, 100);
	circle.style.borderRadius = '10% 50% 10%';
	circle.style.backgroundColor = 'green';
	
	
	
}*/

function myKeyUp(event){
	if (event.keyCode == 37) leftPressed = false;
	if (event.keyCode == 39) rightPressed = false;
	if (event.keyCode == 38) topPressed = false;
	if (event.keyCode == 40) downPressed = false;
}
function movement (){
	if(leftPressed == true) moveLeft();
	if(rightPressed == true) moveRight();
	if(topPressed == true) moveUp();
	if(downPressed == true) moveDown();
}
function myLoad(){
	document.addEventListener('keydown', myKeyDown);
	document.addEventListener('keyup', myKeyUp);
	interval = setInterval(movement, 1);
}
document.addEventListener('DOMContentLoaded', myLoad);