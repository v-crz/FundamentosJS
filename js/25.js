// Eventos del DOM - Inputs
const inputNombre = document.querySelector('.nombre');

// inputNombre.type = 'password';
// inputNombre.placeholder = 'Un placeholder';

// input: captura todos los eventos
// keydown
// keyup
inputNombre.addEventListener('input', function(evt){
    // console.log(inputNombre.value);
    // console.log(evt);
    console.log(evt.target.value);
});

const inputPassword = document.querySelector('.password');
inputPassword.addEventListener('input', funcionPassword);

function funcionPassword(){
    inputPassword.type = 'text';

    setTimeout(() => {
        inputPassword.type = 'password';
    }, 100);
}