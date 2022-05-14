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
const producto4 = {
    nombre: "celular 2",
    precio: .9
} 

//agrega elementos al final del arreglo
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4)

const producto3 = {
    nombre: "Teclado",
    precio: .5
}

carrito.unshift(producto3);
console.table(carrito);


// //Eliminar ultimo elementro de un arreglo
// carrito.pop();
// console.table(carrito);

// //Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

carrito.splice(1,1);
console.table(carrito);

// carrito.splice(1,2);
// console.table(carrito);