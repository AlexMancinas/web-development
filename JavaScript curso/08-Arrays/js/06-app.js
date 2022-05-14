const meses = ['Enero','Febrero','Marzo'];




console.table(meses);


const carrito = [];

// Definir un producto
const producto = {
    nombre: "Monitor de 32 pulgadas",
    precio: 4
}

const producto2 = {
    nombre:'Celular',
    precio:8
}

const producto3 = {
    nombre: "Teclado",
    precio: .5
}

let resultado ;
resultado = [...carrito,producto];

resultado = [...resultado,producto2]
resultado = [producto3,...resultado,]

console.table(resultado);