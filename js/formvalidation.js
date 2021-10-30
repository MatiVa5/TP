var nombreapellido = document.getElementById('nombre-apellido');
var email = document.getElementById('email');
var descripcion = document.getElementById('descripcion')
var error = document.getElementById('error');

function enviarFormulario(){
    console.log('Enviando formulario...');

    var mensajesError=[];

    if(nombreapellido.value === null || nombreapellido.value ===''){
        mensajesError.push('Ingresa tu nombre y apellido');
    }
    if(email.value === null || email.value ===''){
        mensajesError.push('Ingresa tu Email');
    }
    if(descripcion.value === null || descripcion.value ===''){
        mensajesError.push('Ingresa una descripcion');      
    }
    
    error.innerHTML  =  mensajesError.join(', ');

    return false;
}