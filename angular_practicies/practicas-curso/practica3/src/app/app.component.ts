import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  log: any = []
  showSecret = false;
  onToggleDetails(){
    this.showSecret = !this.showSecret
    // this.log.push(this.log.length + 1)
    this.log.push(new Date())

  }
}
