import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated= new EventEmitter<{serverName:string, serverContnent: string}>();
  @Output() blueprintCreated= new EventEmitter<{serverName:string, serverContnent: string}>();
  // newServerName = '';
  newServerContent = '';


  constructor() { }

  ngOnInit(): void {
  }
  onServerAdded(nameInput: HTMLInputElement) {
    if(nameInput.value === '' || this.newServerContent === ''){
      alert('Necesitas llenar los campos')
    } else{

      this.serverCreated.emit({
        serverName: nameInput.value, 
        serverContnent: this.newServerContent})
    }
  }

  onBlueprintAdded(nameInput: HTMLInputElement) {
    if(nameInput.value === '' || this.newServerContent === ''){
      alert('Necesitas llenar los campos')
    } else{
    this.blueprintCreated.emit({
      serverName: nameInput.value, 
      serverContnent: this.newServerContent})
    }
  }
}
