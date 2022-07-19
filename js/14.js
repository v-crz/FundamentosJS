// Arrow funtions

// const sumar = function(numero = 0, numero2 = 0) {
//     return numero + numero2;
// }


// ----- Version 1
// const sumar = (numero = 0, numero2 = 0) => {
//     return numero + numero2;
// }

// ----- Version 2
// Con dos parámetros y una línea de código
// const sumar = (numero = 0, numero2 = 0) => 
//     numero + numero2

// ----- Version 3
// Con un solo parámetro
// const sumar = numero => numero + 20

// ----- Version 4
// Sin parámetros
const sumar = () => 2 + 2;

const resultado = sumar(30);
console.log(resultado);