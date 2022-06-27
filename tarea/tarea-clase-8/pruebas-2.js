function probarValidarSalarios() {
  console.assert(
    validarSalario("") === "El campo salario no puede estar vacío",
    "ValidarSalario no validó que el campo no esté vacío"
  );

  console.assert(
    validarSalario(0) === "El campo salario no puede ser igual a 0",
    "ValidarSalario no validó que el campo no sea igual a 0"
  );

  console.assert(
    validarSalario(-1) === "El campo salario no puede ser menor a 0",
    "ValidarSalario no validó que el campo no sea menor a 0"
  );

  console.assert(
    validarSalario("abc") ===
      "El campo salario sólo acepta números enteros de hasta 12 cifras",
    "ValidarSalario no validó que el campo sólo permita números"
  );

  console.assert(
    validarSalario(12354789521236) ===
      "El campo salario sólo acepta números enteros de hasta 12 cifras",
    "ValidarSalarios no validó que el campo acepte 12 cifras como máximo"
  );

  console.assert(
    validarSalario(12365.56) ===
      "El campo salario sólo acepta números enteros de hasta 12 cifras",
    "ValidarSalarios no validó que el campo acepte 12 cifras como máximo"
  );

  console.assert(
    validarSalario(24500) === "",
    "ValidarSalario no validó un caso válido"
  );
}

probarValidarSalarios();
