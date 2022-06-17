import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  serverStatus: string = 'offline';
  servers = ['Testserver', 'Testserver 2']
  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getServerStatus(){
    return this.serverStatus;
  }

  get getColor(){
    return this.serverStatus == 'online' ? 'green' : 'red'
  }
  ngOnInit(): void {
  }
  
}
