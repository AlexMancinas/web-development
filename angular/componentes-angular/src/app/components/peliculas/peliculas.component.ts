import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  title: string;
  public peliculas: Array<any  >;

  constructor() { 
    this.title = "Componente peliculas"
    this.peliculas =[
      {year: 2019 ,title: 'Spiderman 4', image: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/159643-tv-news-spider-man-no-way-home-image1-dryautoefj-jpg.webp'},
      {year: 2019 ,title: 'Avengers: end game', image: 'https://ichef.bbci.co.uk/news/800/cpsprodpb/BF0D/production/_106090984_2e39b218-c369-452e-b5be-d2476f9d8728.jpg.webp'},
      {year: 2015 ,title: 'Batman VS Superman', image: 'https://www.elviejotopo.com/wp-content/uploads/2016/03/batman-v-superman-dawn-of-justice_bb788b6f.jpg'}
    ]


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
