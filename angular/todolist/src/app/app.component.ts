import { Component, Input, Injectable } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public tareas!: Array<string>
  tarea!: string 
  constructor(){
    
  }

}
