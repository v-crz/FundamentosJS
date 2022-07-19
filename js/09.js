// Operaciones en los arreglos

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const tecnologias2 = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// ***** Añadir elementos al array *****
// ----- Modifican arreglo original -----
// tecnologias.push('GrahpQL'); // Añade al final del array
// tecnologias.unshift('Tecnologia posicion 0'); // Añade al inicio

// ----- No modifica arreglo original -----
// Para agregar al final
// const nuevoArreglo = [
//     ...tecnologias2,
//     'GraphQL'
// ];

// Para agregar al inicio
// const nuevoArreglo = [
//     'GraphQL',
//     ...tecnologias2
// ]

// console.log(nuevoArreglo);


// ***** Eliminar elementos del array *****
// ----- Modifican el arreglo original -----
// Elimina del final
// tecnologias.pop();

// Elimina del inicio
// tecnologias.shift();

// Elimina de una posición en específica
// tecnologias.splice(2, 1); // Eliminará solo el de la posicion 2

// ----- No modifica arreglo original -----
// Retornará todas las tecnologías, excepto HTML
// const nuevoArray = tecnologias.filter( function(tech) {
//     return tech !== 'HTML'
// });

// console.log(nuevoArray);

// ***** Reemplazar del array *****
// ----- Modifica arreglo original -----
// tecnologias[0] = 'GraphQL';

// ----- No modifica el arreglo original -----
const nuevoArray = tecnologias.map(function(tech){
    if(tech === 'HTML'){
        return 'GraphQL';
    } else {
        return tech;
    }
});
console.log(nuevoArray);

console.log(tecnologias);