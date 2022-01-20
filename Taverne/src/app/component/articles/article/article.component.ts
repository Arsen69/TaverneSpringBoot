import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
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

  @Output()
  articlesReady: EventEmitter<Observable<Article[]>> = new EventEmitter();

  @Output()
  achat: EventEmitter<any> = new EventEmitter();

  articles: Observable<Article[]> = new Observable();
  edition: boolean = false;

  login = localStorage.getItem('login');
  role = localStorage.getItem('role');
  article: Article = new Article();
  typesProduits = TypeArticle;

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit(): void {
    this.initArticle();
  }

  initArticle() {
    this.article.id = this.articleRecu.id;
    this.article.nom = this.articleRecu.nom;
    this.article.cout = this.articleRecu.cout;
    this.article.typeProduit = this.articleRecu.typeProduit;
    this.article.volume = this.articleRecu.volume;
    this.article.fournisseur = this.articleRecu.fournisseur;
  }

  acheter() {
    this.articleService
      .acheterArticle(this.article.id!, Number(localStorage.getItem('idBar')!))
      .subscribe((ok: any) => {
        console.log(ok);
      });
      this.achat.emit(true);
  }

  editer() {
    this.edition = !this.edition;
  }

  @HostListener('dblclick')
  TurnOnEdition() {
    if (this.login == this.article.fournisseur!.login) {
      if (this.edition == false) {
        this.edition = true;
      }
    }
  }

  save() {
    this.articleService.update(this.article).subscribe((ok) => {
      console.log(ok);
      this.articles = this.articleService.getAll();
      this.articlesReady.emit(this.articles);
    });
  }

  cancel() {
    this.initArticle();
    this.editer();
  }

  delete(id: number) {
    this.articleService.delete(id).subscribe((ok) => {
      console.log(ok);
      this.articles = this.articleService.getAll();
      this.articlesReady.emit(this.articles);
    });
  }
}
