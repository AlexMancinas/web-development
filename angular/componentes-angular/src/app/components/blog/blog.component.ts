import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {
  public articles!: Article[];
  public url: string;

  constructor(
    private _aticleService: ArticleService,
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._aticleService.getArticles().subscribe({
      next: (response) => {
        if (response.articles) {
          this.articles = response.articles;
        } else {
          console.log('No jala we')
        }
      },
      error: error => console.log("error", error),
    });
  }
}

