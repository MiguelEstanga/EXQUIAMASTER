document.addEventListener("DOMContentLoaded"  , function(){
	burguermenu  = document.getElementById("burger")
	menudesplegable = document.getElementById("desplegable")
	formulario = document.getElementById('formulario')
	Email = document.getElementById("Email")
	
	burguermenu.addEventListener('click', e=>{
		console.log("hola mundo")
		menudesplegable.classList.toggle("active")
	})

	formulario.addEventListener('submit'  , (event)=>{
		event.preventDefault()
		console.log(Email)
		form  =  new FormData(formulario);
		var nombre = form.get('name')
		var email = form.get('email')
		var contenido = form.get('contenido')

		url =  `mailto:miguelestanga12@gmail.com?subject=${nombre}${email}&body=${contenido}`
		Email.setAttribute('href' , url)
		Email.click()
	} )

	window.addEventListener('deviceorientation', handleOrientation);
	
	let inclinacion = 0;
	const image = document.getElementById('portada');
	const textArea = document.getElementById("text_Area")

	function handleOrientation(event) {
	
	  inclinacion = event.gamma	
	 	console.log(inclinacion)
	}	

	function actulizarposicion(){
		const nuevaPosicion = (inclinacion / 90) * 50; // Convertir el valor de inclinación a una 
		image.style.backgroundPosition = `calc(50% + ${nuevaPosicion}% )`; // Actualizar la posición de la imagen
		requestAnimationFrame(actulizarposicion)
	}
	
	if ('ondeviceorientation' in window) {
		actulizarposicion()
		alert("sensor active")
	}else{
		alert('el dispositivo no tiene sensor de movimiento')
	}
	

	portada.addEventListener('click' , e=>{
		image.classList.toggle("right")
		console.log(portada.classList)
	})
})

