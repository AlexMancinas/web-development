const carrito = [
    {nombre: "Monito 27 pulgadas", precio:500},
    {nombre: "Monito 26 pulgadas", precio:400},
    {nombre: "Monito 25 pulgadas", precio:300},
    {nombre: "Monito 22 pulgadas", precio:200},
    {nombre: "Monito 20 pulgadas", precio:100},
    {nombre: "Monito 19 pulgadas", precio:80},

]

const nuevoArreglo = carrito.map( (producto) => {
    return `${producto.nombre} | Precio: ${producto.precio}`;

});

 

const nuevoArreglo2 = carrito.forEach( (producto) => {
    console.log(`${producto.nombre} | Precio: ${producto.precio}`) ;

});

console.log(nuevoArreglo);


//El metodo .map crea un nuevo arreglo y forEach no