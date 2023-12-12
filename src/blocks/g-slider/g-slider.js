o2.slider =
{
	slide(block, calcfun, ifElem, crit)
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
			if (calcfun == '-') {
				slider[currentSlide - 1].classList.add('active');
				array[currentSlide - 1].classList.add('active');
			}
			else
			{
				slider[currentSlide + 1].classList.add('active');
				array[currentSlide + 1].classList.add('active');
			}
		}
	},
	switch(element, slider, array)
	{
		slider[array.indexOf(element)].classList.add('active')
		array[array.indexOf(element)].classList.add('active')
	},
	leftslide(block)
	{
		this.slide(block, '-', 0, 3)
	},
	rightslide(block)
	{
		this.slide(block, '+', 3, 0)
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