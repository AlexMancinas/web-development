const usuario = false;
const puedePagar = true;

if(usuario && puedePagar){
    console.log("Procesando compra");
    
}  else if(!puedePagar && !usuario){
    console.log('crea una cuenta y registra un metodo de pago')
}else if(!usuario){
    console.log('Inicia sesion o crea una cuenta');
} else if(!puedePagar){
    console.log('Fondos insuficientes')
}