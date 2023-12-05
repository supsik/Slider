o2.firstSection =
{
	slider: document.querySelector('.slider-pics'),
	slides: document.querySelectorAll('.slider-slides__item'), //[0,1,2,3]
	i: 0,
	setter()
	{
		this.slider.style.left = '0px';
	},
	leftslide()
	{
		let slider = this.slider;
		let slides = this.slides;
		this.i--;
		if(this.i<0)
		{
			slider.style.left = `-300%`;
			this.i = 3;
		}
		else
		{
			slider.style.left = `calc(${slider.style.left} + 100%)`;
		}
		slides.forEach((element)=>{
			element.style.opacity = '.5'
		})
		slides[this.i].style.opacity = '1'
	},
	rightslide()
	{
		let slider = this.slider;
		let slides = this.slides;
		this.i++;
		if(this.i>3)
		{
			slider.style.left = `0px`;
			this.i = 0;
		}
		else
		{
			slider.style.left = `calc(${slider.style.left} - 100%)`;
		}
		slides.forEach((element)=>{
			element.style.opacity = '.5'
		})
		slides[this.i].style.opacity = '1'
	},
	pickslide()
	{
		let slider = this.slider;
		let slides = this.slides;
		let slidesArr = Array.from(slides);
		slides.forEach((element)=>{
			element.addEventListener('click', (event)=>{
				this.i = slidesArr.indexOf(event.target);
				slider.style.left = `calc(100% * -${this.i})`
				slides.forEach((element)=>{
				element.style.opacity = '.5'
				})
				slides[this.i].style.opacity = '1'
			})
		})
	}
}

o2.firstSection.setter()
o2.firstSection.pickslide()
