"use strict"
//"use strict" te ayuda para que te aplique ciertas restricciones para tener buenas practicas
 
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

//De esta manera el objeto se comporta como constante y no deja que se vuelva a eliminar, agregar o modificar 
Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = 'Imagen.jpg';

console.log(producto);

//De esta manera te das cuenta si el objeto esta congelado
console.log(Object.isFrozen(producto));


