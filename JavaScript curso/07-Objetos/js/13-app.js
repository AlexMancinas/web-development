const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
}

//Retorna las propiedades del objeto
console.log(Object.keys(producto));

//Retorna los valores de las propiedades que tiene el objeto 
console.log(Object.values(producto));

//Te retorna todo, tanto valores como propiedades del objeto
console.log(Object.entries(producto));
