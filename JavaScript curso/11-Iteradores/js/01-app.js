// for(let i =0; i<10 ; i++){
//     console.log(`Numero ${i}`)
// }

// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0 ){
//         console.log(`El numero ${i} es par`);
//     } else{
//         console.log(`El numero ${i} es impar`)
//     }
// }


const carrito = [
    {nombre: "Monito 27 pulgadas", precio:500},
    {nombre: "Monito 26 pulgadas", precio:400},
    {nombre: "Monito 25 pulgadas", precio:300},
    {nombre: "Monito 22 pulgadas", precio:200},
    {nombre: "Monito 20 pulgadas", precio:100},
    {nombre: "Monito 19 pulgadas", precio:80},

]

console.log( carrito.length);

for(let i = 0; i<carrito.length; i++){
    console.log(carrito[i].nombre)
}