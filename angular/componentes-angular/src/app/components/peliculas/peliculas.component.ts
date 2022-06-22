import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  title: string;
  constructor() { 
    this.title = "Componente peliculas"



    console.log("Constructor lanzado");


  }

  ngOnInit(): void {
    console.log('Componente inicado')
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
}
