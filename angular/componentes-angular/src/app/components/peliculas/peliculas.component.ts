import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from 'src/app/models/peliculas';
import { PeliculaService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {
  title: string;
  public peliculas: Array<Pelicula>;
  public favorita!: Pelicula;
  public fecha: any;


  constructor(
  private _peliculaService: PeliculaService,

  ) { 
    this.title = "Componente peliculas"
    this.peliculas = this._peliculaService.getPeliculas();
    this.fecha = new Date(2022, 5, 24)

  }

  ngOnInit(): void {
    console.log('Componente inicado')
    console.log(this._peliculaService.holaMundo())
  }

  ngDoCheck(){
    console.log('DOCHECK lanzado')
  }
  cambiarTitulo(){
    this.title = "El titulo ah sido cambiado";
  }

  ngOnDestroy(){
    console.log('El componente se va a eliminar');
  }

  mostrarFavorita(event: any){
    this.favorita = event.pelicula;
  }
}
