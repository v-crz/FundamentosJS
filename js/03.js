// Tipos de datos

// ***** Undefined *****
// Se asigna automáticamente a una variable cuando se crea
let cliente;
console.log(cliente);
console.log(typeof cliente);


// ***** Boolean *****
const descuento = true;
console.log(descuento);
console.log(typeof descuento);


// ***** Strings *****
const alumno = 'Juan';
let producto = 'Monitor 20 pulgadas';
console.log(typeof alumno);
console.log(typeof producto);


// ***** Number *****
const numero1 = 20.20;
const numero2 = 30;
const numero3 = -100;
console.log(typeof numero1);
console.log(typeof numero2);
console.log(typeof numero3);


// ***** BigInt - numeros grandes en JS *****
const numeroGrande = BigInt(98123980128387389172381723);
console.log(typeof numberoGrande);

// No se pueden mezclar BigInt con otro tipo
// console.log(numero1 + numeroGrande);

// Se tiene que castear / coersión
console.log(numero1 + Number(numeroGrande));


// ***** Symbol *****
// Son únicos aunque tengan el mismo valor
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);

console.log(typeof primerSymbol);
console.log(typeof segundoSymbol);

console.log(primerSymbol === segundoSymbol);
console.log(primerSymbol.valueOf());
console.log(segundoSymbol.valueOf());


// ***** Null *****
// Instancia de tipo objeto
const descuentoUno = null;
console.log(typeof descuentoUno);
