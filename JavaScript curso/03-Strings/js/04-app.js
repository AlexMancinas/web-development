const producto = '                 Monitor de 24 pulgadas              ';

console.log(producto);
console.log(producto.length);

//Eliminar del inicio

console.log(producto.trimStart());
console.log(producto.trimEnd());

console.log(producto.trimStart().trimEnd());
console.log(producto.trim());
console.log(producto.trim());
var productoTrim = producto.trim();

console.log(productoTrim.length);