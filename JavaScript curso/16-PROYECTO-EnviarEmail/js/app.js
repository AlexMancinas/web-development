//Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

//Variable para campos 
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


enventListeners();
function enventListeners(){
    //Cuando la app arranca 
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //campos del formulario
    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);

    //Enviar email
    formulario.addEventListener('submit', enviarEmail);

    //Reinicia el formulario
    btnReset.addEventListener('click', resetearFormulario)

}




//Funciones
function iniciarApp(){
 
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarFormulario(e){

    if(e.target.value.length > 0){
        //Elimina los errores
        const error = document.querySelector('p.errror')
        if(error){
            error.remove();
        }
            

        

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
       

    } else{
        e.target.classList.remove('border', 'border-green-500');
        e.target.style.borderBottomColor = 'red';
        e.target.classList.add('border', 'border-red-500');

        mostrarError('Todos los campos son obligatorios');
    }
    if(e.target.type === 'email'){
      
    
       if(er.test(e.target.value)){
        const error = document.querySelector('p.error');
       
        if(error){
            error.remove();
        }
        
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
       } else {
        
        e.target.classList.remove('border', 'border-green-500');
        e.target.style.borderBottomColor = 'red'; 

        mostrarError('Email no valido');
       }

       if(er.test(email.value) && asunto.value!== '' &&   mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
        console.log('passte la validacion')
       } 
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-color-100','text-red-500','p-3','mt-5', 'text-center', 'error');
    const errorres = document.querySelectorAll('.error');
    if(errorres.length === 0){
        formulario.appendChild(mensajeError)
    } 

}

function enviarEmail(e){
    e.preventDefault();

    //Mostrar el spinner 
    const spinner = document.querySelector('#spinner')
    spinner.style.display = 'flex';


    //Despues de 3 segundos ocultar el spinner  y mostrar el mensaje 
    setTimeout(()=>{
        spinner.style.display = 'none';

        const parrafo = document.createElement('p');
        parrafo.textContent = 'Datos enviados correctamente';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold','uppercase')

        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove();
            formulario.reset();
        }, 500);
    },  3000)
}

//funcion resetear formulario
function resetearFormulario(){
    formulario.reset();
    iniciarApp();
}