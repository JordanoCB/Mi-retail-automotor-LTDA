(function(){

	// Propiedades Slider
	var porpSlider = {

		slider: document.getElementById('slider'),
		primerSlide: null

	}

	// Metodo Slider
	var metSlider = {

		inicio: function(){
			setInterval(metSlider.moverSlide, 3000);
		},

		moverSlide:function(){
			porpSlider.slider.style.transition = 'all 1s ease'
			porpSlider.slider.style.marginLeft = '-100%'

			setTimeout(function(){
				porpSlider.primerSlide = porpSlider.slider.firstElementChild;
				porpSlider.slider.appendChild(porpSlider.primerSlide);

				porpSlider.slider.style.transition = 'unset'
				porpSlider.slider.style.marginLeft = 0;
			}, 1000);
		}

	}

	metSlider.inicio();
}())

