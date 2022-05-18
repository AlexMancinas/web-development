//Variables 
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListener();
function cargarEventListener(){

    //cuando agregas un curso presioando "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', elliminarCuros);

    //Muestra los cursos de Local Storage
    document.addEventListener('DOMContentLoaded', ()=>{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    })

    //vaciar el carrito btn
    vaciarCarrito.addEventListener('click',() =>{
        articulosCarrito = []
        limpiarHTML()
    })
    }

//Funciones 
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;

        leerDatoscurso(curso);
    }
  
}

//Elimina un curso del carrito
function elliminarCuros(e){
    if(e.target.classList.contains('borrar-curso')){
         const cursoId = e.target.getAttribute('data-id')

         //Elimina del arreglo por el data-id
         articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId)

         carritoHTML();
    }
}

//Lee el contenido del HTML que hicimos click y extrae la informacion del curso
function leerDatoscurso(curso){

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precio:curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento ya existe en el carrito
    if(articulosCarrito.some(curso => curso.id ===  infoCurso.id)){
        //Agregamos la cantidad
        const cursos = articulosCarrito.map(curso =>{
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                
                return curso; //Retorna objeto actualizado
            } else{
                return curso; //Retorna objetos no son los duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else{
        //Agregamos el curso al carito
        articulosCarrito = [...articulosCarrito, infoCurso];
        
    }

    //Agrega elementos al arreglo del carrito
    
    console.log(articulosCarrito)

    carritoHTML();
}

//Muestra el carrito de compras en el HTML
function carritoHTML(){

    //Limpiar el html
    limpiarHTML();
    //Recorre el carrito y genera el html
    articulosCarrito.forEach((curso) =>{
        const {imagen,titulo,precio,cantidad,id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}"width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> x </a>
            </td>
        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row)
    
    });

    //Agregar el carrito de compras al storage
    sincronizarStorage();
}
function sincronizarStorage(){
    localStorage.setItem('carrito',JSON.stringify(articulosCarrito));
}

//Elimina los cursos del tbody
function limpiarHTML(){
    //Forma lenta
    // contenedorCarrito.innerHTML = "";

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }

}