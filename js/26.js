// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (evt) => {
    evt.preventDefault();   // Prevenir la accion por default

    // const nombre = document.querySelector('.nombre');
    // Aplicando chaining
    const nombre = document.querySelector('.nombre').value;

    const password = document.querySelector('.password').value;

    if(nombre === '' || password === ''){
        console.log('Todos los campos son obligatorios');
    } else {
        console.log('Enviando...');
    }
    console.log('Enviaste un formulario');
})