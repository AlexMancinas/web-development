//Object literal
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
    // mostrarInfo: function(){
    //     console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    // }
}

//Object constructor

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24 pulgadas',500);
console.log(producto2);

const producto3= new Producto('Tablet 12 pulgadas', 300);
console.log(producto3);
