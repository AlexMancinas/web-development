const autenticado = true;

//==========Mala practica===============
// if(autenticado === true){
    // console.log('Si, puedes ver netflix');
// }else{
    // console.log('No, no puedes ver netflix');
// }

//==========BUENA PRACTICA==============
// if(autenticado){
// console.log('Si, puedes ver netflix');
// } else{
    // console.log('No, no puedes ver netflix');
// }

console.log( autenticado ? 'Si esta autenticado' : 'No esta autenticado');

