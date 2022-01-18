import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/model/inventaire/article';
import { ArticleService } from 'src/app/services/article.service';
import { CompteService } from 'src/app/services/comptes/compte.service';

@Component({
  selector: 'app-catalogue-global',
  templateUrl: './catalogue-global.component.html',
  styleUrls: ['./catalogue-global.component.css'],
})
export class CatalogueGlobalComponent implements OnInit {
  constructor(
    private articleService: ArticleService,
    private compteService: CompteService
  ) {}

  //articles: Article[] = [];
  articles: Observable<Article[]> = new Observable();
  role = localStorage.getItem('role');
  id: number = 0;

  ngOnInit(): void {
    console.log(localStorage.getItem('login'));
    /* this.articleService.getAll().subscribe((result) => {
      this.articles = result;
    }); */

    this.articles = this.articleService.getAll();

    this.compteService.getIdByLoginConnected().subscribe((result) => {
      this.id = result;
    });
  }

  getNewListe(articles: Observable<Article[]>): Observable<Article[]> {
    this.articles = articles;
    return this.articles;
  }
}
