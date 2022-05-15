const autenticado = true;
const puedePagar = false;


//Operadores terciarios
console.log( autenticado && puedePagar? 'Si puede pagar' : 'No puede pagar' );

console.log( autenticado || puedePagar? 'Si puede pagar' : 'No puede pagar' );

//Operador terciario anidado
console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si esta autenticado pero no puede pagar' : 'No puede pagar');