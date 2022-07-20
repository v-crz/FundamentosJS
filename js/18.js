// Comparación y operador estricto

const numero1 = 20;
const numero2 = '20';

console.log(typeof numero1);
console.log(typeof numero2);

// Comparación estricta ===
// Revisa valor y tipo de dato

// if(numero1 === Number(numero2))
if(numero1 === numero2){
    console.log('Si, son iguales');
} else {
    console.log('No son iguales');
}


const autenticado = true;
if(autenticado){
    console.log('Si está autenticado');
}