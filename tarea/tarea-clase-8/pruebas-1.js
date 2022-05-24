function probarValidarCantidadGrupoFamiliar() {
    console.assert(
        validarCantidadGrupoFamiliar('') === 'Este campo no puede estar vacio',
        'ValidarCantidadGrupoFamiliar no validó un campo vacío.'
    );

    console.assert(
        validarCantidadGrupoFamiliar(0) === 'El grupo familiar debe tener al menos un integrante', 
        'ValidarCantidadGrupoFamiliar no validó un valor igual a 0'
    );

    console.assert(
        validarCantidadGrupoFamiliar(3) === '',
        'ValidarCantidadGrupoFamiliar no validó un valor válido.'
    );

    console.assert(
        validarCantidadGrupoFamiliar('abc') === 'Este campo sólo acepta números hasta 3 cifras', 
        'ValidarCantidadGrupoFamiliar no validó que los datos sólo sean numéricos.'
    );

    console.assert(
        validarCantidadGrupoFamiliar(12254) === 'Este campo sólo acepta números hasta 3 cifras', 
        'ValidarCantidadGrupoFamiliar no validó que el máximo de dígitos sea 3.'
    );

    console.assert(
        validarCantidadGrupoFamiliar(5) === '',
        'validarCantidadGrupoFamiliar no validó un número correcto'
    );
}

function probarValidarEdades(){
    console.assert(
        validarEdades('') === 'Este campo no puede estar vacio', 
        'validarEdades no validó que el campo no esté vacío'
    );

    console.assert(
        validarEdades(0) === 'La edad no puede ser 0', 
        'validarEdades no validó que la edad no sea 0'
    );

    console.assert(
        validarEdades(-2) === 'La edad no puede ser inferior a 1',
        'validarEdades no validó que la edad no sea menor a 1'
    );

    console.assert(
        validarEdades('abc') === 'Este campo sólo acepta números de hasta 2 cifras.',
        'validarEdades no validó que los datos sólo sean numéricos'
    );

    console.assert(
        validarEdades('11111') === 'Este campo sólo acepta números de hasta 2 cifras.',
        'validarEdades no validó que el máximo de dígitos sea 2'
    );

    console.assert(
        validarEdades(12) === '',
        'validarEdades no validó un número correcto'
    );
}

probarValidarCantidadGrupoFamiliar();
probarValidarEdades();
