const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Comprobar si un valor existe 
meses.forEach(mes => {
    if(mes === 'Enero'){
        console.log(`${mes} si existe`);
    }   
});
//.includes solo funciona con un valor basado en el indice si se quiere revisar un valor en un arreglo de objetos este no funcionara
const resultado = meses.includes('Diciembre')
console.log(resultado)

//En un arreglo de objetos usamos .some
const existe = carrito.some((producto) => {
    return producto.nombre = 'Celular'
});

console.log(existe);