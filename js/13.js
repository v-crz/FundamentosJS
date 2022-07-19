// Function expression
const sumar = function(numero = 0, numero2 = 0) {
    return numero + numero2;
}

// Se llama después de haberse definido
const resultado = sumar(30);

console.log(resultado);