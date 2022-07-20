// Métodos que no mutan el arreglo original

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const numeros = [10, 20, 30];

let nuevoArray;

// Filter
nuevoArray = tecnologias.filter(tech => tech === 'React');

// includes: comprobar si un elemento existe en el array
// const resultado = tecnologias.includes('React');

// some: devuelve si al menos un elemento cumple la condición
// const resultado = numeros.some(numero => numero > 15);

// find: devuelve el primer elemento que cumpla la condición
// const resultado = numeros.find( numero => numero > 15);

// every: retorna true/false si todos cumplen con la condición
// const resultado = numeros.every( numero => numero > 9);

// reduce: acumula en el total
// const resultado = numeros.reduce( (total, numero) => numero + total, 0 )

// filter: crea un nuevo array con base a una condición
// const resultado = tecnologias.filter( tech => tech === 'Node.js');
// const resultado = numeros.filter( numero => numero > 15);

// Para iterar
tecnologias.forEach( (tech, index) => console.log(index + ': ' + tech));

// Crea un nuevo array
const arrayMap = tecnologias.map( tech => tech)

// console.log(resultado);
console.log(arrayMap);