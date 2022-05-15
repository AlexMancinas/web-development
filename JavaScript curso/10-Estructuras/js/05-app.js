//Switch case

const metodoPago = 'trajeta';

switch (metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'trajeta':
        console.log(`Pagaste con ${metodoPago}`)
        break;
    default:
        console.log('Aun no has seleccionado metodo de pago o metodo de pago no soportado');
        break;
}