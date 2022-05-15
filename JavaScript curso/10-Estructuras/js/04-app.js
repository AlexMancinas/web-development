// Operador Mayor que  Y MENOR QUE 

const dinero = 300;
const totalApagar = 300;
const tarjeta = true;
const cheque = true;

if(dinero >= totalApagar){
    console.log('si podemos pagar');

} else if(tarjeta){
    console.log('si, tengo una tarjeta')
} else if(cheque){
    console.log('si, tengo un cheque')
} else{
    console.log('No puedes pagar')
}