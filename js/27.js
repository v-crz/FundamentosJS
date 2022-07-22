// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (evt) => {
    evt.preventDefault();   // Prevenir la accion por default

    // const nombre = document.querySelector('.nombre');
    // Aplicando chaining
    const nombre = document.querySelector('.nombre').value;
    const password = document.querySelector('.password').value;


    const alertaPrevia = document.querySelector('.alerta');
    if(alertaPrevia){
        alertaPrevia.remove();
    }
    const alerta= document.createElement('div');
    alerta.classList.add('alerta', 'segunda-clase');

    
    if(nombre === '' || password === ''){
        alerta.textContent = 'Todos los campos son obligatorios';
        alerta.classList.add('error');
    } else {
        alerta.textContent = 'Todo bien...';
        alerta.classList.add('exito');
    }
    // console.log(alerta);
    formulario.appendChild(alerta);
})