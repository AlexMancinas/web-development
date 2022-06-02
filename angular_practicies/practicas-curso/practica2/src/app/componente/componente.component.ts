import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.scss']
})
export class ComponenteComponent implements OnInit {
  username: string = ""
  

  constructor() { 
    
  }
  

  ngOnInit(): void {
  }
  
  save(){
    this.username = ''
    return alert('Usuario resgistrado')+ this.username 
  }


 
}
