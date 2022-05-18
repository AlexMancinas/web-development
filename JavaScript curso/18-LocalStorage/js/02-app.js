const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses);
console.log(mesesArray)
// console.log(JSON.parse(meses));

const producto = localStorage.getItem('producto');
console.log(JSON.parse(producto));