(function(){

	//Objeto con propiedades de efecto menuMovil
	var propMenu = {

		burguer_menu: document.getElementById('burguer_menu'),
		slideMenu: document.getElementById('slideMenu'),
		menuActivo: false,
		elem_menu: document.querySelectorAll('#slideMenu .menu-principal a')
	}


	//Objeto con metodos de efecto menuMovil
	var metMenu = {

		inicio: function(){

			propMenu.burguer_menu.addEventListener('click', metMenu.toggleMenu);

			for (var i = 0; i < propMenu.elem_menu.length; i++) {
				propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
			}
		},

		toggleMenu: function(){
			if (propMenu.menuActivo == false) {

				propMenu.menuActivo = true;
				propMenu.slideMenu.className = slideMenu.className + ' active'
			}else{
				
				propMenu.menuActivo = false;
				propMenu.slideMenu.className = slideMenu.className.replace(' active', '')
			}
		},

		ocultarMenu: function(){
			propMenu.menuActivo = false;
			propMenu.slideMenu.className = slideMenu.className.replace(' active', '')
		}
	}

	metMenu.inicio();
}())