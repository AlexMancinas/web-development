//Event bubbling

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titleDiv = document.querySelector('.titulo');

cardDiv.addEventListener('click',(e) =>{
    e.stopPropagation();
    console.log('click en card');
});


infoDiv.addEventListener('click',(e) =>{
    e.stopPropagation();
    console.log('click en info');
});


titleDiv.addEventListener('click',(e) =>{
    e.stopPropagation();
    console.log('click en titulo');
});