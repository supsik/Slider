const sliderbox = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider-slides__item')
sliderbox.style.backgroundPositionX = '1500px';
let i = 0;

window.o2.sliderleft = function(){
	sliderbox.style.backgroundPositionX = `calc(${sliderbox.style.backgroundPositionX} + 750px)`;
	if (i>0){
		i--;
		slides.forEach((element)=>{
			element.style.opacity = '.5';
			slides[i].style.opacity = '1';
		});
	}
	else
	{
		i = 3;
		slides.forEach((element)=>{
			element.style.opacity = '.5';
			slides[i].style.opacity = '1';
		});
	}

}
window.o2.sliderright = function(){
	sliderbox.style.backgroundPositionX = `calc(${sliderbox.style.backgroundPositionX} - 750px)`;
	if (i<slides.length-1){
		i++;
		slides.forEach((element)=>{
			element.style.opacity = '.5';
			slides[i].style.opacity = '1';
		});
	}
	else{
		i = 0;
		slides.forEach((element)=>{
			element.style.opacity = '.5';
			slides[i].style.opacity = '1';
		});
	}
}