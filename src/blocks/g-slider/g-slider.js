o2.slider =
{
	slider:Array.from(document.querySelectorAll('.slider')),
	onload()
	{
		document.querySelectorAll('.first-pic').forEach((element)=>{
			element.classList.add('active')
		})
		this.slider.forEach((element)=>{
			element.counter = 0;
		})
	},
	leftslide(block)
	{
		let slide = block.parentElement.parentElement.querySelectorAll('.slider-pics__pic');
		if(block.parentElement.parentElement == this.slider[0])
		{
			slide[this.slider[0].counter].style.display = 'none';
			this.slider[0].counter--;
			if (this.slider[0].counter<0) {
				this.slider[0].counter = 3;
			}
			slide[this.slider[0].counter].style.display = 'block';
		}
		if(block.parentElement.parentElement == this.slider[1])
		{
			slide[this.slider[1].counter].style.display = 'none';
			this.slider[1].counter--;
			if (this.slider[1].counter<0) {
				this.slider[1].counter = 3;
			}
			slide[this.slider[1].counter].style.display = 'block';
		}
	},
	rightslide(block)
	{
		let slide = block.parentElement.parentElement.querySelectorAll('.slider-pics__pic');
		if(block.parentElement.parentElement == this.slider[0])
		{
			slide[this.slider[0].counter].style.display = 'none';
			this.slider[0].counter++;
			if (this.slider[0].counter>3) {
				this.slider[0].counter = 0;
			}
			slide[this.slider[0].counter].style.display = 'block';
		}
		if(block.parentElement.parentElement == this.slider[1])
		{
			slide[this.slider[1].counter].style.display = 'none';
			this.slider[1].counter++;
			if (this.slider[1].counter > 3) {
				this.slider[1].counter = 0;
			}
			slide[this.slider[1].counter].style.display = 'block';
		}
	}
}

o2.slider.onload()