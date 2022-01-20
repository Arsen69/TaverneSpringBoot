import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  form: FormGroup;
  article: Article = new Article();
  articles: Observable<Article[]> = new Observable();
  typesProduits = TypeArticle;
  fourn: Fournisseur = new Fournisseur();

  @Input()
  id: number = 0;

  @Output()
  articlesReady: EventEmitter<Observable<Article[]>> = new EventEmitter();

  constructor(private articleService: ArticleService, private router: Router) {
    this.form = new FormGroup({
      cout: new FormControl('', Validators.min(0)),
      volume: new FormControl('', Validators.min(0)),
    });
  }

  ngOnInit(): void {}

  save() {
    this.article.fournisseur = this.fourn;
    this.article.fournisseur.id = this.id;
    this.article.cout = this.form.controls['cout'].value;
    this.article.volume = this.form.controls['volume'].value;
    this.articleService.create(this.article).subscribe((ok) => {
      this.articles = this.articleService.getAll();
      this.articlesReady.emit(this.articles);
    });
  }
}
