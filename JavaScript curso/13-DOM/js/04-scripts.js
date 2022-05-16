//.queySelector solo seleccionan el primer elemento que encuentran
const card = document.querySelector('.card');

console.log(card);

//Podemos tener selectores como en CSS 
const info = document.querySelector('.premium .info');
console.log(info);

//Seleccionar el segundo card de hospedaje 
const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//Seleccionar formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);

//Seleccionar elementos html
const navegacion = document.querySelector('nav');
console.log(navegacion)