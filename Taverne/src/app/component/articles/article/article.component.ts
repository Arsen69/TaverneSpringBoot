import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/model/inventaire/article';
import { TypeArticle } from 'src/app/model/inventaire/type-article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article,[app-article]',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input()
  articleRecu: Article = new Article();

  role = localStorage.getItem('role');
  article: Article = new Article();
  typesProduits = TypeArticle;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.article.id = this.articleRecu.id;
    this.article.nom = this.articleRecu.nom;
    this.article.cout = this.articleRecu.cout;
    this.article.typeProduit = this.articleRecu.typeProduit;
    this.article.volume = this.articleRecu.volume;
    this.article.fournisseur = this.articleRecu.fournisseur;
  }

  acheter() {
    this.articleService.acheterArticle(
      this.article.id!,
      parseInt(localStorage.getItem('idBar')!, 10)
    );
  }
}
