//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = []


//Event listeners
eventListeners();

function eventListeners(){
    //Cuando usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded',()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        console.log(tweets);
        crearHTML();
    });
}


//Funciones
function agregarTweet(e){
    e.preventDefault();

    //Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //Validacion
    if(tweet === ''){

        mostarMensajeError('Un mensaje no puede ir vacio');
       
        return; //Evista que se ejecuten mas lineas de codigo, este return SOLO funciona cunado esta dentro de una funcion
    }

    const tweetObj = {
        id: Date.now(),
        texto: tweet
    }
    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    
    //Una vez agregado, crear el html
    crearHTML();
    
    //Reiniciar o reseat campo de formulario
    formulario.reset()
};

//Mostar mensaje de error
function mostarMensajeError(error){
    const mostarMensajeError = document.createElement('p');
    mostarMensajeError.textContent = error;
    mostarMensajeError.classList.add('error');

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mostarMensajeError);

    //Elimina la alerta desdes de 1.5 segundos 
    setTimeout(() => {
        mostarMensajeError.remove();
    }, 1500);
}

//Muestra un listado de los tweets
function crearHTML(){

    limpiarHtml();

    if(tweets.length > 0){
         tweets.forEach((tweet)=>{
             //Agregar un boton
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'x '
             //Añadir la funcion de eliminar 
             btnEliminar.onclick = ()=>{
                 borrarTweet(tweet.id);
             }
             //CrearHTML
             const li = document.createElement('li');

             //añadir el texto
             li.innerText = tweet.texto;
             //Asignar el boton
             li.appendChild(btnEliminar);

             //Insertarlo en el html
             listaTweets.appendChild(li)
         });
    }

    sincronizarStorage();
}
//Agregar los tweets actuales a localStorage
function sincronizarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets));
}
//Eliminar tweet
function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}
//limpiar html
function limpiarHtml(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstElementChild)
    }
}