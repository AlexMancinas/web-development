import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string= 'No server was created!';
  serverName: string= 'Testserver';
  serverCreated: boolean = false;
  servers = ['Testserver', 'Testserver 2']
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      console.log(this.allowNewServer)
    }, 2000);
   }
  
  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = "server was Created! Name is: " + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
