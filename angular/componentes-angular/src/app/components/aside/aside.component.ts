import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],

})
export class AsideComponent implements OnInit {
 
  public searchString!: string;

  constructor(
    private _router : Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  
  goSearch(){
     this._router.navigate(['/buscar', this.searchString])
  }
}
