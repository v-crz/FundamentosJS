const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

// const nuevoArray = tecnologias.map(function(tech){
//     if (tech === 'HTML'){
//         return 'GraphQL';
//     } else {
//         return tech;
//     }
// });

// Arrow function
const nuevoArray = tecnologias.map(tech => {
    if (tech === 'HTML'){
        return 'GraphQL';
    } else {
        return tech;
    }
});


// const nuevoArray2 = tecnologias.filter(function(tech){
//     return tech === 'React';
// });

const nuevoArray2 = tecnologias.filter(tech => tech === 'React');

console.log(nuevoArray);
console.log(nuevoArray2);
