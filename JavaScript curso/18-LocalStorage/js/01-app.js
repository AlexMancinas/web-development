//Local storage solo almacena strings y para guardar archivos JSON tienen que guardarse con JSON.stringfy
localStorage.setItem('nombre','Juan');

const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio:300,
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
// const mesesString = JSON.stringify(meses);
// localStorage.setItem('meses', mesesString)
localStorage.setItem('meses', JSON.stringify(meses))

