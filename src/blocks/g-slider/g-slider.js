o2.slider =
{
	onload()
	{
		document.querySelectorAll('.first-pic').forEach(el=>{
			el.classList.add('active')
		})
		let slide = document.querySelector('.third-slide');
	},
	sliding(block)
	{
	},
	leftslide(block)
	{
		let slider = Array.from(block.closest('.slider').querySelectorAll('.slider-pics__pic'));
		let item;
		let array2 = Array.from(block.parentElement.querySelectorAll('.slider-slides__item'));
		array2.forEach(el=>{
			el.style.opacity = .5;
		})
		slider.forEach((element)=>
		{
			if (getComputedStyle(element).display == 'block') {
				item = element;
			}
		})
		let currentSlide = slider.indexOf(item);
		slider[currentSlide].classList.remove('active');
		if (currentSlide==0)
		{
			currentSlide = 3;
			slider[currentSlide].classList.add('active');
			array2[currentSlide].style.opacity = 1;
		}
		else
		{
			slider[currentSlide-1].classList.add('active');
			array2[currentSlide-1].style.opacity = 1;
		}
		this.sliding(block)
	},
	rightslide(block)
	{
		let slider = Array.from(block.closest('.slider').querySelectorAll('.slider-pics__pic'));
		let item;
		let array2 = Array.from(block.parentElement.querySelectorAll('.slider-slides__item'));
		array2.forEach(el=>{
			el.style.opacity = .5;
		})
		slider.forEach((element)=>
		{
			if (getComputedStyle(element).display == 'block') {
				item = element;
			}
		})
		let currentSlide = slider.indexOf(item);
		slider[currentSlide].classList.remove('active');
		if (currentSlide > 2)
		{
			currentSlide = 0;
			slider[currentSlide].classList.add('active');
			array2[currentSlide].style.opacity = 1;
		}
		else
		{
			slider[currentSlide+1].classList.add('active');
			array2[currentSlide+1].style.opacity = 1;
		}
	},
	sliderpick(element)
	{
		let slider = Array.from(element.closest('.slider').querySelectorAll('.slider-pics__pic'));
		let array = Array.from(element.closest('.slider').querySelectorAll('.slider-slides__item'));
		slider.forEach(el=>{
			el.classList.remove('active')
		})
		array.forEach(el=>{
			el.style.opacity = .5;
		})
		slider[array.indexOf(element)].classList.add('active')
		array[array.indexOf(element)].style.opacity = 1;
	}
}

o2.slider.onload()