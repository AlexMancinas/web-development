const carrito = [
    {nombre: "Monito 27 pulgadas", precio:500},
    {nombre: "Monito 26 pulgadas", precio:400},
    {nombre: "Monito 25 pulgadas", precio:300},
    {nombre: "Monito 22 pulgadas", precio:200},
    {nombre: "Monito 20 pulgadas", precio:100},
    {nombre: "Monito 19 pulgadas", precio:80},

]



for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} | Precio: ${carrito[i].precio}`);
}

carrito.forEach( function(producto){
    console.log(`${producto.nombre} | Precio: ${producto.precio}`);

})