function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  } else if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  } else if (!/^[a-z]+$/i.test(nombre)) {
    return "El campo nombre sólo acepta letras";
  } else {
    return "";
  }
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "No has completado este campo";
  }
  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length >= 100) {
    return "El campo descripción es muy largo";
  } else if (descripcionRegalo.length === 0) {
    return "El campo descripción no puede estar vacío";
  } else if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
    return "El campo descripción solo puede tener números y letras";
  } else {
    return "";
  }
}

function validarFormulario(event) {

  event.preventDefault(); //por Event Bubbling
  
  eliminarErrores();

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    'descripcion-regalo': errorDescripcionRegalo,
  };
  
  const esExito = manejarErrores(errores) === 0;

  if(esExito) {
    $form.className = 'oculto';
    document.querySelector('#exito').className = '';
    redirigirPagina();
  }

}

function manejarErrores(errores) {
  const llaves = Object.keys(errores);
  const $errores = document.querySelector('#errores');

  let cantidadErrores = 0;

  llaves.forEach(function(llave) {
    const error = errores[llave];

    if(error) {
      cantidadErrores++;
      $form[llave].className = "error"; //funciona porque el name del form coincide con el key
      $form[llave].value = '';

      const $error = document.createElement('li');
      $error.innerText = error;
      $errores.appendChild($error);

    } else {
      $form[llave].className = "";
    }


  });

  return cantidadErrores;

}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;

function redirigirPagina() {
  setTimeout(function(){
    window.location.href = "wishlist.html"; 
  }, 5000);
  
}

function eliminarErrores() {

const listaErrores = document.getElementById('errores');
  while (listaErrores.hasChildNodes()) {
    listaErrores.removeChild(listaErrores.firstChild);
  };
}

