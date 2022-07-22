function sumar(numero1, numero2){
    return numero1 + numero2;
}

function restar(numero1, numero2){
    return numero1 - numero2;
}

// Solo se puede tener un export default por documento
// y en import se puede nombrar arbitrariamente
// export default sumar;

// Para exportar más de una función
// y en import se debe colocar el nombre exacto
export {
    sumar,
    restar
}
