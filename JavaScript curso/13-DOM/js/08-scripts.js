const navegacion = document.querySelector('nav.navegacion');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

// console.log(navegacion.childNodes); //Los espacios en blanco son considerados elementos
// console.log(navegacion.children)//Solo traera elementos HTML


// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType)

const card = document.querySelector('.card');
// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM';
// card.children[0].src = 'img/hacer3.jpg';
// console.log(card.children[0]);

//Traversing the hija al padre

// console.log(card.parentNode);
// console.log(card.parentElement);
// console.log(card.parentElement.parentElement);

//  console.log(card)
// //como acceder al hermano de un elemento 
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard);
// //con previouselementsibling
// console.log(ultimoCard.previousElementSibling);