import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
    
  public user: any;
  public campo!: string;
  public campo2!: string;
  constructor() { 
    this.user = {
      nombre: '',
      apellidos: '',
      bio: '',
      genero: ''
    }
    
  }
    

  ngOnInit(): void {
  }
  
  onSubmit(){
    alert('Datos Guardados');
    console.log(this.user)
  }

  hasDadoClick(){
    alert('Haz dado click')
  }

  hasSalido(){

    alert('Haz salido del campo')
  }

  soltarTecla(){
    alert('haz dado enter')
  }
}
