const meses = ['Enero','Febrero','Marzo'];

//Agregar al final del arreglo
meses.push('Abril');
meses.push('Mayo');


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
//agrega elementos al final del arreglo
carrito.push(producto);
carrito.push(producto2);

//Agregar elementos al comienzo del arreglo
carrito.unshift(producto3);

console.table(carrito);