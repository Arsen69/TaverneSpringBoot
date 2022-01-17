import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/inventaire/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-catalogue-global',
  templateUrl: './catalogue-global.component.html',
  styleUrls: ['./catalogue-global.component.css'],
})
export class CatalogueGlobalComponent implements OnInit {
  constructor(private articleService: ArticleService) {}

  articles: Article[] = [];

  ngOnInit(): void {
    console.log(localStorage.getItem('login'));
    this.articleService.getAll().subscribe((result) => {
      this.articles = result;
      console.log(result);
    });
  }
}
