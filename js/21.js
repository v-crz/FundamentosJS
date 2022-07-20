// Scope

const precio = 30;

function unaFuncion(){
    const precio = 600; // Variable local
    console.log(precio);
}

console.log(precio);

unaFuncion();