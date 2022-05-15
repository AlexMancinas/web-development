const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

const carrito = [
    {nombre: "Monito 27 pulgadas", precio:500},
    {nombre: "Monito 26 pulgadas", precio:400},
    {nombre: "Monito 25 pulgadas", precio:300},
    {nombre: "Monito 22 pulgadas", precio:200},
    {nombre: "Monito 20 pulgadas", precio:100},
    {nombre: "Monito 19 pulgadas", precio:80},

]

for(let pendiente of pendientes){
    console.log(pendiente);
}

for (const producto of carrito) {
    console.log(producto.nombre);
}