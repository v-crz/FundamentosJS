// MAnipular HTML con JS

heading.textContent = 'Un nuevo heading';
console.log(heading.textContent);

const inputNombre = document.querySelector('#nombre');
inputNombre.value = 'Un valor por default';

const enlaces = document.querySelectorAll('.navegacion a');
enlaces.forEach( enlace => enlace.textContent = 'Nuevo enlace');


