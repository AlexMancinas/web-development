const producto = 'Monitor de 24 pulgadas';


//.replace('Valor que se reemplazara','Nuevo valor reemplazante') "para reemplazar"
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor curvo'));

//.slice('parametro donde comieza a cortar','parametro donde termina de cortar') "para cortar"
console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1)); //si hago esto, slice no reconoce la instruccion

//Alternativa a .slice
console.log(producto.substring(0,10));
console.log(producto.substring(2,1));//Si hago esto, substring cambia los paremetros para poder ejecutarlo correctamente s

const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));