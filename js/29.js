// Fetch API
// Nuevo AJAX, reemplazó el XML HTTP request
// Consumir API hospedado en otro servidor

const url = 'https://jsonplaceholder.typicode.com/comments';


// then es un promise
const consultarAPI = () => {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            resultado.forEach(comentario => {
                console.log(comentario);
            });
        });
}

consultarAPI();
