// Function declaration
// Hoisting: primero se registran todas las funciones y después de ejecutan.

// Parametro por default
function sumar(numero = 0, numero2 = 0) {
    console.log( numero + numero2 );
}

sumar(10, 20);
sumar(100, 400);
sumar(100);
sumar();