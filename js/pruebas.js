function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre('12524445') === "El campo nombre sólo acepta letras",
    'ValidarNombre no validó que el nombre sólo tenga letras.'
  );

  console.assert(
    validarNombre("Fabricio") === "",
    "validarNombre falló con un nombre válido"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("Buenos Aires") === "",
    "validarCiudad falló con un nombre válido"
  );

  console.assert(
    validarCiudad("") === "No has completado este campo",
    "validarCiudad no validó que el campo no esté vacío"
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") ===
      "El campo descripción no puede estar vacío",
    "ValidarDescripcionRegalo no validó que el campo no esté vacío"
  );

  console.assert(
    validarDescripcionRegalo(
      "jsjsjsjshjkadhkjncjncjnjnjkncjdksnakjhhhjnsjncscnasjcnjscnaklncjnakjsnjfdhhfhudcnladcnjnajknjksanjknakcnkjasnaskjjsaknjsknasckdh"
    ) === "El campo descripción es muy largo",
    "ValidarDescripcionRegalo no funcionó con una descripción muy larga"
  );

  console.assert(
    validarDescripcionRegalo("Regalo") === "",
    "La función ValidarDescripcionRegalo no funcionó con una descripción correcta"
  );

  console.assert(
    validarDescripcionRegalo('.,.,.,,,..,') === "El campo descripción solo puede tener números y letras", 
    "La función validarDescripcionRegalo no validó que fueran solo números y letras"
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();


