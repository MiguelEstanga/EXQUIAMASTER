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

	function handleOrientation(event) {
	  // Get the rotation value around the z-axis (tilt left or right)
	  const tilt = event.gamma;
	  var alpha = event.alpha;
	  var gamma = event.gamma;
	  var beta = event.beta;
	  // Update the image's CSS transform property to tilt it
	  const image = document.getElementById('portada');
	  const textArea = document.getElementById("text_Area")
	
	 	imgP = textArea.style.backgroundPosition ;
	  

	    // Determinar la orientación del dispositivo
		  var orientation = '';
		  if (gamma < -45) {
		    orientation = 'vertical';
		  } else if (gamma > 45) {
		    orientation = 'vertical invertida';
		  } else if (beta < -45) {
		    orientation = 'horizontal invertida';
		  } else if (beta > 45) {
		    orientation = 'horizontal';
		  }

		  // Determinar la posición de la pantalla
		  var position = '';
		  if (orientation === 'vertical') {
		   
		     	if( alpha < 180 ){
		  			textArea.style.backgroundPosition= 'left' 
		  			image.style.backgroundPosition= 'left' 
			  	}else{
			  		textArea.style.backgroundPosition= 'right'
			  		image.style.backgroundPosition= 'right'
			  	}
		  } else if (orientation === 'vertical invertida') {
		  	if(  alpha < 180 ){
		  		textArea.style.backgroundPosition = 'right' 
		  		image.style.backgroundPosition = 'right' 
		  	}else{
		  		 textArea.style.backgroundPosition= 'left'
		  		 image.style.backgroundPosition= 'left'
		  	}
		  

		  } else if (orientation === 'horizontal') {
		  	if( beta < 0 ){
		  		textArea.style.backgroundPosition= 'left' 
		  		image.style.backgroundPosition= 'left' 
		  	}else{
		  		textArea.style.backgroundPosition = 'right'
		  		image.style.backgroundPosition = 'right'
		  	}
		   
		  } else if (orientation === 'horizontal invertida') {
		  	if( beta < 0 ){
		  		textArea.style.backgroundPosition = 'right'
		  		image.style.backgroundPosition = 'right'
		  	}else{
		  		textArea.style.backgroundPosition = 'left';
		  		image.style.backgroundPosition = 'left'
		  	}
		    
		  }
		 
		  // Hacer algo con la posición de la pantalla
		  //console.log('La pantalla está hacia la', position);

	}		
})

