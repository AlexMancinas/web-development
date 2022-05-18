//Variables
const marca = document.getElementById('marca');
const year = document.getElementById('year');
const minimo = document.getElementById('minimo');
const maximo = document.getElementById('maximo');
const puertas = document.getElementById('puertas');
const transmision = document.getElementById('transmision');
const color = document.getElementById('color');

//Contenedor para los resultados 
const resultado = document.getElementById('resultado');


const max = new Date().getFullYear();
const min = max - 10;

//Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}


//Eventos
document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos); //Muestra los automoviles

    //Llenar las opciones de años
    llenarSelect();
    }
)


//Event listener para los selectores de busqueda
marca.addEventListener('change',()=>{
    datosBusqueda.marca = marca.value;

    filtrarAuto();
});
year.addEventListener('change',()=>{
    datosBusqueda.year = year.value;

    filtrarAuto();
});
minimo.addEventListener('change',()=>{
    datosBusqueda.minimo = minimo.value;

    filtrarAuto();
});
maximo.addEventListener('change',()=>{
    datosBusqueda.maximo = maximo.value;

    filtrarAuto();
});
puertas.addEventListener('change',()=>{
    datosBusqueda.puertas = puertas.value;

    filtrarAuto();
});
transmision.addEventListener('change',()=>{
    datosBusqueda.transmision = transmision.value;

    filtrarAuto();
});
color.addEventListener('change',()=>{
    datosBusqueda.color = color.value;

    filtrarAuto();
});



//Funcioness
function mostrarAutos(autos){

    limpiarHTML();//Eliminar el html previo

    autos.forEach( auto =>{
        const{marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = ` ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision ${transmision} - Precio: $${precio} USD - Color: ${color}`;
        resultado.appendChild(autoHTML);
    })
}

function llenarSelect(){
    for(let i = max; i > min ; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega las opciones de año al select
    }
}
//Limpiar html
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}
//Funcion que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
  
    if(resultado.length ){
        mostrarAutos(resultado);
    } else{
        noResultados();
    }
    // console.log(resultado)
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === parseInt(datosBusqueda.year);
    }
    return auto;
}

function filtarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= parseInt(datosBusqueda.minimo);
    }
    return auto;
}

function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= parseInt(datosBusqueda.maximo);
    }
    return auto;
}

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === parseInt(datosBusqueda.puertas);
    }
    return auto;
}

function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}

function noResultados(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error') ;
    noResultado.textContent = 'No hay resultados, Intenta mas variaciones'; 
    resultado.appendChild(noResultado)
}