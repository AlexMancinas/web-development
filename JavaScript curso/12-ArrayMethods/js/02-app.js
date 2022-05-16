const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes,i) =>{
    console.log((i + 1), mes);
    // if(mes === 'Abril'){
    //     console.log(`Encontramos ${mes} en el indice ${(i)+1}`);
    // }
    
} );

//Encontrar el indice Abril
const indice = meses.findIndex(mes=>mes === 'Abril');
console.log(indice);

//Encontrar un indice de un arreglo de objetos...
const indice2 = carrito.findIndex(producto=>producto.precio === 100);
console.log(indice2);
//findIndex solo encuentra el primer articulo