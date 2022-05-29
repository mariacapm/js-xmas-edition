/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

function validarCantidadGrupoFamiliar($cantidadGrupoFamiliar) {
  if ($cantidadGrupoFamiliar === "") {
    return "Este campo no puede estar vacio";
  } else if ($cantidadGrupoFamiliar === 0) {
    return "El grupo familiar debe tener al menos un integrante";
  } else if (!/^[0-9]{1,2}$/.test($cantidadGrupoFamiliar)) {
    return "Este campo sólo acepta números hasta 3 cifras";
  }
  return "";
}

function validarEdades(edades) {
  if (edades === "") {
    return "Este campo no puede estar vacio";
  } else if (edades === 0) {
    return "La edad no puede ser 0";
  } else if (edades < 0) {
    return "La edad no puede ser inferior a 1";
  } else if (!/^[0-9]{1,2}$/.test(edades)) {
    return "Este campo sólo acepta números de hasta 2 cifras.";
  }
  return "";
}

const $botonEnviar = document.querySelector("#boton-enviar");

const $cantidadGrupoFamiliar = document.querySelector(
  "#cantidad-miembros-familia"
);

let cantidadPersonas;

$botonEnviar.onclick = validarFormulario;



function validarFormulario(event) {
  cantidadPersonas = $cantidadGrupoFamiliar.value;
  let errores = {};

  const errorCantidadPersonas = validarCantidadGrupoFamiliar(cantidadPersonas);

  errores["cantidad-miembros-familia"] = errorCantidadPersonas;

  const esExito = manejarErroresCantidadPersonas(errores) === 0;

  if (esExito) {
    crearCampoPersona(cantidadPersonas);
    quitarHidden($botonCalcular);
    deshabilitarBoton($botonEnviar);
  }

  event.preventDefault();
}

function manejarErroresCantidadPersonas(errores) {
  const keys = Object.keys(errores);

  let cantidadErrores = 0;

  keys.forEach(function (key) {
    const error = errores[key];

    if (error) {
      cantidadErrores++;
      $form[key].className = "error";
      $form[key].value = "";
    } else {
      $form[key].className = "";
    }
  });
  return cantidadErrores;
}

function deshabilitarBoton(boton) {
  boton.setAttribute("disabled", "");
}

function crearCampoPersona(cantidadPersonas) {
  for (let i = 1; i <= cantidadPersonas; i++) {
    crearLabel(i);
    crearInput(i);
  }
}

function crearInput(i) {
  const nodoInput = document.createElement("input");
  nodoInput.type = "number";
  nodoInput.name = "persona" + i;
  nodoInput.id = "persona" + i;
  document.querySelector("#edades-miembros-familia").appendChild(nodoInput);
}

function crearLabel(i) {
  const nodoLabel = document.createElement("label");
  nodoLabel.htmlFor = "persona" + i;
  nodoLabel.innerText = "Edad Integrante " + i + ":";
  document.querySelector("#edades-miembros-familia").appendChild(nodoLabel);
  const saltoLinea = document.createElement("br");
  nodoLabel.before(saltoLinea);
}

function quitarHidden(elemento) {
  elemento.classList.remove("oculto");
}

const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function (event) {
  limpiarCampos();
  obtenerNombreId();
  obtenerEdades();

  const esExito = cantidadErrores === 0;

  if (esExito) {
    const $resultados = document.querySelector("#resultados");
    quitarHidden($resultados);
    calcularMayor();
    calcularMenor();
    calcularPromedio();
    deshabilitarBoton($botonCalcular);
  
  }

  event.preventDefault();
};

let arrayId = [];

function obtenerNombreId() {
  for (i = 1; i <= cantidadPersonas; i++) {
    const id = "persona" + i;
    arrayId.push(id);
  }
}

let arrayEdades = [];
let edad;

function obtenerEdades() {
  for (i = 0; i < arrayId.length; i++) {
    edad = Number(document.getElementById(arrayId[i]).value);
    if (manejarErroresEdades(edad) !== 0) {
      return cantidadErrores;
    } else if (manejarErroresEdades(edad) == 0){
      arrayEdades.push(edad);
  }
}
}

let cantidadErrores;

function manejarErroresEdades(edad) {
  cantidadErrores = 0;
  const edadId = arrayId[i];
  const errorEdad = validarEdades(edad);
  if (errorEdad !== "") {
    cantidadErrores++;
    document.getElementById(edadId).className = "error";
    document.getElementById(edadId).value = "";
  } else {
    document.getElementById(edadId).className = "";
  }
  return cantidadErrores;
}

function limpiarCampos() {
  arrayId = [];
  arrayEdades = [];
}

function calcularMenor() {
  arrayEdades.sort(function (a, b) {
    return a - b;
  });
  const menor = arrayEdades[0];
  document.querySelector("#menor").insertAdjacentText("beforeend", menor);
}

function calcularMayor() {
  arrayEdades.sort(function (a, b) {
    return b - a;
  });
  const mayor = arrayEdades[0];
  document.querySelector("#mayor").insertAdjacentText("beforeend", mayor);
}

function calcularPromedio() {
  let suma = 0;
  let edad;
  for (edad of arrayEdades) {
    suma += edad;
  }
  let promedio = suma / arrayEdades.length;
  document.querySelector("#promedio").insertAdjacentText("beforeend", promedio);
}

const $botonResetear = document.querySelector("#boton-resetear");

$botonResetear.onclick = function () {
  location.reload();
};
