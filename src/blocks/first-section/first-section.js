const sliderbox = document.querySelector('.slider');
sliderbox.style.backgroundPositionX = '50%';

window.o2.sliderleft = function(){
	sliderbox.style.backgroundPositionX = `calc(${sliderbox.style.backgroundPositionX} + 100px)`;
}

window.o2.sliderright = function(){
	sliderbox.style.backgroundPositionX = `calc(${sliderbox.style.backgroundPositionX} - 100px)`;
}