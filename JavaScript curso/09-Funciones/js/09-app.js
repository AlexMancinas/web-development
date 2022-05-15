const reproductor =  {
    reproducir: function(id){
        console.log(`Reproduciendo cancion ${id}`);
    },
    pausar: function(){
        console.log('Pausando');
    },
    borrar : function(id){
        console.log(`Borrando cancion ${id}`);
    },
    creaPlaylist: function(plname){
        console.log(`Playlist ${plname} creada`);
    },
    reproducirPlaylist: function(plname){
        console.log(`Reproduciendo playlist ${plname}`);
    },
    borrarPlaylist: function(plname){
        console.log(`Playlist ${plname} eliminada`);
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.creaPlaylist('Hondaman');
reproductor.reproducirPlaylist('Hondaman');
reproductor.borrarPlaylist('Hondaman');
//De esta manera se agregan metodos de funcion desde fuera
// reproductor.borrar = function(id){
//     console.log(`Borrando cancion ${id}`);
// }

