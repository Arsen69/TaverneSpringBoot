import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Fournisseur } from 'src/app/model/comptes/fournisseur';
import { Article } from 'src/app/model/inventaire/article';
import { TypeArticle } from 'src/app/model/inventaire/type-article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.css'],
})
export class FormArticleComponent implements OnInit {
  article: Article = new Article();
  articles: Observable<Article[]> = new Observable();
  typesProduits = TypeArticle;
  fourn: Fournisseur = new Fournisseur();

  @Input()
  id: number = 0;

  @Output()
  articlesReady: EventEmitter<Observable<Article[]>> = new EventEmitter();

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {}

  save() {
    this.article.fournisseur = this.fourn;
    this.article.fournisseur.id = this.id;
    this.articleService.create(this.article).subscribe((ok) => {
      this.articles = this.articleService.getAll();
      this.articlesReady.emit(this.articles);
    });
  }
}
