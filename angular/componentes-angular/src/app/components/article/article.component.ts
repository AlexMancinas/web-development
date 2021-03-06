import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public article!: Article;
 
  public url: string;

  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.url = Global.url;

  }

  ngOnInit(): void {
    this._route.params.subscribe(console.log);
    this._route.params.subscribe(params => {
      let id = params['id'];

      console.log(params)
      this._articleService.getArticle(id).subscribe({
        next: (response) => {
          if (response.article) {
            this.article = response.article
          } else {
            this._router.navigate(['/home'])
          }
        },
        error: error => {
          console.log(error)
          this._router.navigate(['/home'])
        }
      }
      )

    });
  }

}
