// Objetos - manipulación

// Se pueden modificar sus propiedades a pesar de ser const
// Un objeto si permite reescribir sus propiedades
const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true
}

// Con esto no se pueden modificar,
// ni eliminar, ni agregar propiedades
Object.freeze(producto);

// Permite modificar propiedades existentes,
// pero no permite eliminar ni agregar
Object.seal(propiedad)

// Reescribir un valor
producto.nombre = 'Monitor curvo';

// Si no existe una propiedad, la va a añadir
producto.imagen = 'imagen.jpg';

// Eliminar una propiedad del objeto
delete producto.disponible;


console.log(producto);