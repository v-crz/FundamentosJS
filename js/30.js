// Fetch API - Async Await
// Se utiliza con funciones asíncronas

const url = 'https://jsonplaceholder.typicode.com/comments';


// then es un promise
// const consultarAPI = () => {
//     fetch(url)
//         .then(respuesta => respuesta.json())
//         .then(resultado => {
//             resultado.forEach(comentario => {
//                 console.log(comentario);
//             });
//         });
// }

const consultarAPI = async () => {
    // await bloquea el código hasta que se tiene un resultado
    const respuesta = await fetch(url);
    console.log(respuesta);
    console.log('Después de respuesta');
    
    const resultado = await respuesta.json();
    console.log('Después de resultado');
    // resultado.forEach(comentario => {
    //     console.log(comentario);
    // });
}


consultarAPI();
