// Eventos del DOM - Clicks

const heading = document.querySelector('.heading');

// heading.addEventListener('click', clickHeading);
// function clickHeading(){
//     console.log('Click en heading');
// }

// addEventListener se asocia a un solo elemento
heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo heading al dar click'
});


const enlaces = document.querySelectorAll('.navegacion a');
enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        console.log('Diste click en un enlace');
    });
});
