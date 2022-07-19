// Function declaration
// Hoisting: primero se registran todas las funciones y después de ejecutan.

// Parametro por default
// function sumar(numero = 0, numero2 = 0) {
//     console.log( numero + numero2 );
// }

// sumar(10, 20);
// sumar(100, 400);
// sumar(100);
// sumar();



// Return array
// function sumar(numero = 0, numero2 = 0) {
//     return [numero + numero2, 'Hola mundo'];
// }

// const [resultado, holaMundo] = sumar(20, 30);
// console.log(resultado);
// console.log(holaMundo);


// Return object
function sumar(numero = 0, numero2 = 0) {
    return {
        resultado: numero + numero2, 
        mensaje: 'Hola mundo'
    };
}

const {resultado, mensaje} = sumar(20, 30);
console.log(resultado);
console.log(mensaje);