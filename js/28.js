// Imports y exports

// Nombrado arbitrario
// import funcionExterna from './funciones.js';

// Nombrado exacto
// import {sumar} from './funciones.js';

// Nombrado con alias
import {sumar as suma} from './funciones.js';


// const resultado = funcionExterna(20, 30);
// const resultado = sumar(20, 30);
const resultado = suma(20, 30);

console.log(resultado);
