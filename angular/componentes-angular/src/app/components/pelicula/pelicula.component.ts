import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Pelicula } from 'src/app/models/peliculas';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  @Input()
  pelicula!: Pelicula;

  @Output() MarcarFavorito = new EventEmitter();
  constructor() {

   }

  ngOnInit(): void {
  }
  
  select(event:any, pelicula:Pelicula){
  this.MarcarFavorito.emit({
    pelicula: pelicula
  });
  }
}
