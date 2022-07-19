// Unir 2 objetos

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}

// Modifica producto
// producto.cliente = cliente;


// // crea un nuevo objeto
// const nuevoObjeto = Object.assign(producto, cliente);
// // la variable nombre toma el último valor asignado
// console.log(nuevoObjeto);
// console.log(cliente);
// // el nombre es sobre escrito por el valor en nombre de cliente
// console.log(producto);


// Spread operator no modifica los objetos originales
// const nuevoObjeto2 = {...producto, ...cliente};
const nuevoObjeto2 = {
    producto: {...producto}, 
    cliente: {...cliente}
};
console.log(nuevoObjeto2);
console.log(cliente);
console.log(producto);

