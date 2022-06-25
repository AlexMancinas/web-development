import { Injectable } from "@angular/core";
import { Pelicula } from "../models/peliculas";

@Injectable() 
export class PeliculaService{
    public peliculas: Array<Pelicula>
    
    constructor(){
        this.peliculas = [
            new Pelicula('Spiderman 4', 2019, 'https://cdn.pocket-lint.com/r/s/970x/assets/images/159643-tv-news-spider-man-no-way-home-image1-dryautoefj-jpg.webp' ),
            new Pelicula('Avengers: end game', 2019, 'https://ichef.bbci.co.uk/news/800/cpsprodpb/BF0D/production/_106090984_2e39b218-c369-452e-b5be-d2476f9d8728.jpg.webp'),
            new Pelicula('Batman VS Superman', 2015, 'https://www.elviejotopo.com/wp-content/uploads/2016/03/batman-v-superman-dawn-of-justice_bb788b6f.jpg')
           ]
    }

    holaMundo(){
        return 'Hola  Mundo desde un servicio de angular';
    }

    getPeliculas(){
        return this.peliculas
    }
}