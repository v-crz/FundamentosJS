// Objetos

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

// console.log(producto);
console.table(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Destructuring
// Obteniendo valores de un objeto
const {nombre, precio, disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);


// Object literal enhacement
// Asignar valores a un objeto
const autenticado = true;
const usuario = 'Juan';

// const nuevoObjeto = {
//     autenticado: autenticado,
//     usuario: usuario
// }

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto);
