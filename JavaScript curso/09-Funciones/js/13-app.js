const reproductor =  {
    cancion: "",
    reproducir:(id) => `Reproduciendo cancion ${id}`,
    pausar: ()=>'Pausando',
    borrar :(id)=>`Borrando cancion ${id}`,
    creaPlaylist: (plname) =>`Playlist ${plname} creada`,
    reproducirPlaylist: (plname) =>`Reproduciendo playlist ${plname}`,
    borrarPlaylist: (plname) =>`Playlist ${plname} eliminada`,

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = "enter sadman";
reproductor.obtenerCancion;

console.log(reproductor.reproducir(30));
console.log(reproductor.pausar());
console.log(reproductor.borrar(30));
console.log(reproductor.creaPlaylist('Hondaman'));
console.log(reproductor.reproducirPlaylist('Hondaman'));
console.log(reproductor.borrarPlaylist('Hondaman'));
//De esta manera se agregan metodos de funcion desde fuera
// reproductor.borrar = function(id){
//     console.log(`Borrando cancion ${id}`);
// }

