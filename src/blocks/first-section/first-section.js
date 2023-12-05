o2.firstSection =
{
	sliderbox : document.querySelector('.slider'),
	slides : document.querySelectorAll('.slider-slides__item'),
	i : 0,
	setter()
	{
		this.sliderbox.style.backgroundSize = `${this.sliderbox.offsetWidth * 4}px 100%`;
		this.sliderbox.style.backgroundPositionX = '0px'
	},
	sliderleft()
	{
		this.sliderbox.style.backgroundPositionX = `calc(${this.sliderbox.style.backgroundPositionX} + ${this.sliderbox.offsetWidth}px`;
		if (this.i>0){
			this.i--;
			this.slides.forEach((element)=>{
				element.style.opacity = '.5';
				this.slides[this.i].style.opacity = '1';
			});
		}
		else
		{
			this.i = 3;
			this.slides.forEach((element)=>{
				element.style.opacity = '.5';
				this.slides[this.i].style.opacity = '1';
		});
	}},
	sliderright()
	{
		this.sliderbox.style.backgroundPositionX = `calc(${this.sliderbox.style.backgroundPositionX} - ${this.sliderbox.offsetWidth}px)`;
		if (this.i<this.slides.length-1){
			this.i++;
			this.slides.forEach((element)=>{
				element.style.opacity = '.5';
				this.slides[this.i].style.opacity = '1';
			});
		}
		else{
			this.i = 0;
			this.slides.forEach((element)=>{
				element.style.opacity = '.5';
				this.slides[this.i].style.opacity = '1';
			});
		}
	}
};

o2.firstSection.setter();
