const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}


// const nombre = producto.nombre;
// console.log(nombre);


//Destructuring
// const {precio} = producto;
// console.log(precio);

const { nombre} = producto;

console.log(nombre);

//Destructuring con Arreglos
const numeros = [10,20,30,40,50];

const [primero,segundo,tercero] = numeros;

console.log(primero);
console.log(tercero);
/////////////
const numeros2 = [10,20,30,40,50];

const [, ,tres] = numeros;

console.log(tres);
///////////////
const numeros3 = [10,20,30,40,50];

const [uno, dos,...tress] = numeros;

console.log(tress);
