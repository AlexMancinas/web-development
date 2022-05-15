// for(let i =0; i<10 ; i++){
//         if(i === 5){
//             console.log(`Este es el 5`);
//             break;
//         }
//         console.log(`Numero ${i}`)
//     }

// for(let i =0; i<10 ; i++){
//         if(i === 5){
//             console.log(`Este es el 5`);
//             continue;
//         }
//         console.log(`Numero ${i}`)
//     }


const carrito = [
    {nombre: "Monito 27 pulgadas", precio:500},
    {nombre: "Monito 26 pulgadas", precio:400, descuento:true},
    {nombre: "Monito 25 pulgadas", precio:300},
    {nombre: "Monito 22 pulgadas", precio:200},
    {nombre: "Monito 20 pulgadas", precio:100},
    {nombre: "Monito 19 pulgadas", precio:80},

]

console.log( carrito.length);

for(let i = 0; i<carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre)
}