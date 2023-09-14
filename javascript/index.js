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


})

