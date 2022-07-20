const autenticado = true;

autenticado ?
    console.log('Usuario autenticado') : 
    console.log('No autenticado');


// Doble ternario
const saldo = 600;
const pagar = 500;
const tarjeta = true;

saldo > pagar ?
    console.log('Puedes pagar con saldo') :
    tarjeta ? 
        console.log('Puedes pagar con tarjeta') :
        console.log('No puedes pagar');