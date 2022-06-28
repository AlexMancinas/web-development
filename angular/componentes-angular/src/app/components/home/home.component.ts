import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]

})
export class HomeComponent implements OnInit {
  public articles!: Article[];
  public title:string;
  
  constructor(
    private _aticleService: ArticleService,
  ) { 
    this.title = 'Últimos artículos';
  }

  ngOnInit(): void { 
    this._aticleService.getArticles(true).subscribe({
    next: (response) => {
      if (response.articles) {
        this.articles = response.articles;
        console.log(this.articles)
      } else {
        console.log('No jala we')
      }
    },
    error: error => console.log("error", error),
  });
  }

}
