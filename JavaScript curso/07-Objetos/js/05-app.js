const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true,
    informacion: {
        medidas:{
            peso: '1 kg',
            medida: '1m',
        },
        fabricaion:{
            pais:'china'
        }
    }
}

console.log(producto);

console.log(producto.informacion);

console.log(producto.informacion.medidas.medida);

console.log(producto.informacion.fabricaion.pais);