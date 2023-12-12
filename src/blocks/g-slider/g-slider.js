o2.slider =
{
	slide(currentSlide, slider, array, ifElem, crit, calc)
	{
		array.forEach(el=>{
			el.classList.remove('active');
		})
		if (currentSlide == ifElem)
		{
			currentSlide = crit;
			slider[currentSlide].classList.add('active');
			array[currentSlide].classList.add('active');
		}
		else
		{
			slider[calc].classList.add('active');
			array[calc].classList.add('active');
		}
	},
	switch(element, slider, array)
	{
		slider[array.indexOf(element)].classList.add('active')
		array[array.indexOf(element)].classList.add('active')
	},
	leftslide(block)
	{
		let slider = Array.from(block.closest('.slider').querySelectorAll('.slider-pics__pic'));
		let item;
		let array = Array.from(block.parentElement.querySelectorAll('.slider-slides__item'));
		slider.forEach((element)=>
		{
			if (getComputedStyle(element).display == 'block') {
				item = element;
			}
		})
		let currentSlide = slider.indexOf(item);
		slider[currentSlide].classList.remove('active');
		this.slide(currentSlide, slider,array, 0, 3, currentSlide-1)
	},
	rightslide(block)
	{
		let slider = Array.from(block.closest('.slider').querySelectorAll('.slider-pics__pic'));
		let item;
		let array = Array.from(block.parentElement.querySelectorAll('.slider-slides__item'));
		slider.forEach((element)=>
		{
			if (getComputedStyle(element).display == 'block') {
				item = element;
			}
		})
		let currentSlide = slider.indexOf(item);
		slider[currentSlide].classList.remove('active');
		this.slide(currentSlide, slider, array, 3, 0, currentSlide+1)
	},
	sliderpick(element)
	{
		let slider = Array.from(element.closest('.slider').querySelectorAll('.slider-pics__pic'));
		let array = Array.from(element.closest('.slider').querySelectorAll('.slider-slides__item'));
		slider.forEach(el=>{
			el.classList.remove('active')
		})
		array.forEach(el=>{
			el.classList.remove('active')
		})
		this.switch(element, slider, array)
	}
}