const nav = document.querySelector('.navegacion');

//Registrar un evento
// nav.addEventListener('click',()=>{
//      console.log('Click en nav');
// })
nav.addEventListener('mouseenter',()=>{
    console.log('Entrando a la navegacion');

    nav.style.backgroundColor = 'white';
})
nav.addEventListener('mouseout',()=>{
    console.log('saliendo a la navegacion');

    nav.style.backgroundColor = 'transparent';

});
nav.addEventListener('mousedown',()=>{
    console.log('Presionaste el mouse izq');

    nav.style.backgroundColor = 'blue';
});
nav.addEventListener('mouseup',()=>{
    console.log('Soltaste el click izq');

    nav.style.backgroundColor = 'green';

});
nav.addEventListener('dblclick',()=>{
    console.log('Hiciste doble click izq');

    nav.style.backgroundColor = 'red';

});

//mousedowns = similar al click
//click = click
//dblclick = doble click
//mouseup = cuando sueltas el click del mouse