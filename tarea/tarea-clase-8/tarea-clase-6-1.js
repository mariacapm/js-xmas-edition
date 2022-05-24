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

