"use strict"
//"use strict" te ayuda para que te aplique ciertas restricciones para tener buenas practicas
 
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

//De esta manera el objeto no te permite agregar o eliminar propiedades pero si se pueden MODIFICAR las existentes
Object.seal(producto);

 producto.disponible = false;
// producto.imagen = 'Imagen.jpg';

console.log(producto);

//Verificar si el objeto tiene el metodo .seal activado
console.log(Object.isSealed(producto));

