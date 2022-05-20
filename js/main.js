function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }

  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }
  return "";
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
  }

  if (descripcionRegalo.length === 0) {
    return "El campo descripción no puede estar vacío";
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
  return "";
function manejarErrores(errores) {
  const llaves = Object.keys(errores);
  const $errores = document.querySelector('#errores');

  let cantidadErrores = 0;

  llaves.forEach(function(llaves) {
    const error = errores[llaves];

    if(error) {
      cantidadErrores++;
      $form[llaves].className = "error";
      $form[llaves].value = '';

      const $error = document.createElement('li');
      $error.innerText = error;
      $errores.appendChild($error);

    } else {
      $form[llaves].className = "";
    }


  });

  return cantidadErrores;

}
