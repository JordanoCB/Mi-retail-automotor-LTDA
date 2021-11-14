(function(){

	//Objeto con propiedades de efecto Scroll
	var porpScroll = {

		posicion: window.pageYOffset,
		scroll_suave: document.getElementsByClassName('scroll_suave'),
		volver_arriba: document.getElementsByClassName('volver_arriba'),
		destino: null,
		seccion_distancia: null,
		intervalo: null
	}

	//Objeto con metodos de efecto Scroll
	var metScroll = {

		inicio: function(){
			for (var i = 0; i < porpScroll.scroll_suave.length; i++) {
				porpScroll.scroll_suave[i].addEventListener('click', metScroll.moverse);
			}

			for (var i = 0; i < porpScroll.volver_arriba.length; i++) {
				porpScroll.volver_arriba[i].addEventListener('click', metScroll.subir);
			}
		},

		moverse: function(e){
			e.preventDefault();
			clearInterval(porpScroll.intervalo);
			porpScroll.destino = this.getAttribute('href')
			porpScroll.seccion_distancia = document.querySelector(porpScroll.destino).offsetTop -94;

			porpScroll.posicion = window.pageYOffset;
			porpScroll.intervalo = setInterval(function(){

				if (porpScroll.posicion < porpScroll.seccion_distancia) {

					porpScroll.posicion += 30;

					if (porpScroll.posicion >= porpScroll.seccion_distancia) {
						clearInterval(porpScroll.intervalo);
					}
				}else{
					porpScroll.posicion -= 30;

					if (porpScroll.posicion <= porpScroll.seccion_distancia) {
						clearInterval(porpScroll.intervalo);
					}
				}

				window.scrollTo(0, porpScroll.posicion)
			}, 15);
		},

		subir: function(e){
			e.preventDefault();
			clearInterval(porpScroll.intervalo);
			porpScroll.posicion = window.pageYOffset;
			porpScroll.intervalo = setInterval(function(){

				if (porpScroll.posicion > 0){
					porpScroll.posicion -= 30;

					if (porpScroll.posicion <= 0) {
						clearInterval(porpScroll.intervalo);
					}
				}else{
					return;
				}

				window.scrollTo(0, porpScroll.posicion)
			}, 15);
		}
	}

	metScroll.inicio();
}())