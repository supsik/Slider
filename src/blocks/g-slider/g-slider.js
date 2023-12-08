o2.slider =
{
	counter:0,
	mainfoo(slider)
	{
		// block.parentElement.parentElement.querySelectorAll('.oncebtn').forEach(function(element) {
		// 	element.style.pointerEvents = 'none';
		// });
		slider.parentElement.querySelectorAll('button').forEach((element)=>{
			element.
		})
		{
			this.counter--;
			if (this.counter < 0) {
				this.counter = 3;
			}
			slider.style.left = `calc(${this.counter} * -100%)`;
		}
	}
}