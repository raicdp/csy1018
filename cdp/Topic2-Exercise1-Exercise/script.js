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
	if(currentTop == -200){
	 circle.style.up = window.innerHeight + 'px';
}
else
	circle.style.top = currentTop -1 + 'px';

	
}
function moveDown(){
	var circle = document.getElementById('circle');
	var currentTop = circle.offsetTop;
	if(window.innerHeight == currentTop ){
		circle.style.left = 200 + 'px';
	}

	else
	circle.style.top = currentTop + 1 + 'px';
	
}
var interval;
function clickFunction(event){
	clearInterval(interval);
	if(event.keyCode == 37)
		 interval = setInterval(moveLeft,1);
	if(event.keyCode == 39)
		 interval = setInterval(moveRight,1);
	if(event.keyCode == 38)
		 interval = setInterval(moveUp,1);
	if(event.keyCode == 40)
		 interval = setInterval(moveDown,1);

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