function moveLeft(){
	var circle = document.getElementById('circle');
	var currentLeft = circle.offsetLeft;
	circle.style.left = currentLeft - 10 + 'px';

}
function moveRight(){
	var circle = document.getElementById('circle');
	var currentLeft = circle.offsetLeft;
	circle.style.left = currentLeft + 10 + 'px';
	
}
function moveUp(){
	var circle = document.getElementById('circle');
	var currentTop = circle.offsetTop;
	circle.style.top = currentTop - 10 + 'px';
	
}
function moveDown(){
	var circle = document.getElementById('circle');
	var currentTop = circle.offsetTop;
	circle.style.top = currentTop + 10 + 'px';
	
}
var interval;
function clickFunction(event){
	clearInterval(interval);
	if(event.keyCode == 37)
		 interval = setInterval(moveLeft,10);
	if(event.keyCode == 39)
		 interval = setInterval(moveRight,10);
	if(event.keyCode == 38)
		 interval = setInterval(moveUp,10);
	if(event.keyCode == 40)
		 interval = setInterval(moveDown,10);

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
function myLoad(){
	document.addEventListener('keydown', clickFunction);
	

}
document.addEventListener('DOMContentLoaded', myLoad);