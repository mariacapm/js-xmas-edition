/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const botonAnadir = document.querySelector("#aniadir");

let contador = 0;

botonAnadir.onclick = function () {
  if (contador >= 0) {
    contador++;
    crearLabel();
    crearInput();
  }
  return false;
};

const botonQuitar = document.querySelector("#quitar");

botonQuitar.onclick = function () {
  if (contador > 0) {
    contador--;
    eliminarUltimoHijo();
  }
};

function crearLabel() {
  const nodoLabel = document.createElement("label");
  nodoLabel.htmlFor = "salario" + contador;
  nodoLabel.innerText = "Integrante " + contador + ":";
  document.querySelector("div").appendChild(nodoLabel);
}

function crearInput() {
  const nodoInput = document.createElement("input");
  nodoInput.id = "salario" + contador;
  nodoInput.type = "number";
  nodoInput.name = "salario" + contador;
  document.querySelector("div").appendChild(nodoInput);
}

function eliminarUltimoHijo() {
  const div = document.querySelector("div");
  if (div.hasChildNodes()) {
    div.removeChild(div.lastChild);
    div.removeChild(div.lastChild);
  }
}

const botonCalcular = document.querySelector("#calcular");

botonCalcular.onclick = validarFormulario;

function validarFormulario(event) {
  const cantidadInputs = document.getElementsByTagName("input").length;

  eliminarErrores();

  arraySalarios = [];
  arrayId = [];

  crearArraySalarios(cantidadInputs);
  crearArrayId(cantidadInputs);

  if (manejarErroresSalarios() === 0) {
    quitarHidden();
    calcularMayor();
    calcularMenor();
    calcularPromedioAnual();
    calcularPromedioMensual();
    deshabilitarBoton(botonCalcular);
  }

  event.preventDefault();
}

function manejarErroresSalarios() {
  let cantidadErrores = 0;

  const $errores = document.querySelector("#errores");

  arraySalarios.forEach(function (salario, index) {
    salario = arraySalarios[index];
    const errorSalario = validarSalario(salario);
    if (errorSalario !== "") {
      cantidadErrores++;
      document.getElementById(arrayId[index]).className = "error";
      document.getElementById(arrayId[index]).value = "";

      const $error = document.createElement("li");
      $error.innerText = errorSalario;
      $errores.appendChild($error);
    } else {
      document.getElementById(arrayId[index]).className = "";
    }
  });
  return cantidadErrores;
}

function eliminarErrores() {
  const listaErrores = document.getElementById("errores");
  while (listaErrores.hasChildNodes()) {
    listaErrores.removeChild(listaErrores.firstChild);
  }
}

let arraySalarios;

function crearArraySalarios(cantidadInputs) {
  let salario;
  for (let i = 1; i <= cantidadInputs; i++) {
    const nombreId = document.querySelector("#salario" + i);
    salario = Number(nombreId.value);
    arraySalarios.push(salario);
  }
}

let arrayId;

function crearArrayId(cantidadInputs) {
  for (let i = 1; i <= cantidadInputs; i++) {
    const id = "salario" + i;
    arrayId.push(id);
  }
}

function validarSalario(salario) {
  if (salario === "") {
    return "El campo salario no puede estar vacío";
  } else if (salario === 0) {
    return "El campo salario no puede ser igual a 0";
  } else if (salario < 0) {
    return "El campo salario no puede ser menor a 0";
  } else if (!/^[0-9]{1,12}$/.test(salario)) {
    return "El campo salario sólo acepta números enteros de hasta 12 cifras";
  }
  return "";
}

function quitarHidden() {
  document.querySelector("main").removeAttribute("hidden");
}

function calcularMayor() {
  arraySalarios.sort(function (a, b) {
    return b - a;
  });
  const mayorSalario = arraySalarios[0];
  document
    .querySelector("#mayor")
    .insertAdjacentText("beforeend", mayorSalario + "€");
}

function calcularMenor() {
  arraySalarios.sort(function (a, b) {
    return a - b;
  });
  const menorSalario = arraySalarios[0];
  document
    .querySelector("#menor")
    .insertAdjacentText("beforeend", menorSalario + "€");
}

let promedioAnual;
function calcularPromedioAnual() {
  let suma = 0;
  for (i = 0; i < arraySalarios.length; i++) {
    suma += arraySalarios[i];
  }
  promedioAnual = suma / arraySalarios.length;
  document
    .querySelector("#promedio-anual")
    .insertAdjacentText("beforeend", promedioAnual + "€");
}

const ANIO = 12;

function calcularPromedioMensual() {
  const promedioMensual = promedioAnual / ANIO;
  document
    .querySelector("#promedio-mensual")
    .insertAdjacentText("beforeend", promedioMensual + "€");
}

function deshabilitarBoton(boton) {
  boton.setAttribute("disabled", "");
}
