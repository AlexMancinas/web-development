const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

for(let pendiente in pendientes){
    console.log(pendiente);
}


const automovil = {
    modelo: 'Mustang',
    year: 2010,
    motor: 5.0
}

for (const propiedad in automovil) {
   console.log(`${automovil[propiedad]}`)
}

for (let[llave, valor] of Object.entries(automovil)){
    console.log(llave,valor);
}