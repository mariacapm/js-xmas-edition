document.querySelector("#enviar-carta").onclick = function (event) {
  event.preventDefault();
  const $form = document.querySelector("#carta-a-santa");

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const comportamiento = $form.comportamiento.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  console.log(nombre);
  console.log(ciudad);
  console.log(comportamiento);
  console.log(descripcionRegalo);

  
};

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
  }
  return "";
}
