import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/inventaire/article';
import { AuthenticationService } from './Users/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private static URL: string = 'http://localhost:8080/Taverne/api/articles';

  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  public acheterArticle(id: number, idBar: number): any {
    console.log(id);
    console.log(idBar);
    console.log(ArticleService.URL + '/' + id + '/bar/' + idBar);
    return this.http.get<any>(ArticleService.URL + '/' + id + '/bar/' + idBar, {
      headers: this.auth.getHeaders(),
    });
  }

  public getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(ArticleService.URL, {
      headers: this.auth.getHeaders(),
    });
  }
  public getAllByFournisseur(id: number): Observable<Article[]> {
    return this.http.get<Article[]>(ArticleService.URL + '/' + id, {
      headers: this.auth.getHeaders(),
    });
  }

  public getAllByTypeArticle(type: string): Observable<Article[]> {
    return this.http.get<Article[]>(ArticleService.URL + '/types/' + type, {
      headers: this.auth.getHeaders(),
    });
  }

  public update(data: Article): Observable<Article> {
    const o = this.articleToJson(data);
    return this.http.put<Article>(ArticleService.URL + '/' + o.id, data, {
      headers: this.auth.getHeaders(),
    });
  }

  public create(data: Article): Observable<Article> {
    const o = this.articleToJson(data);
    console.log(o);
    console.log(o.fournisseur.id);
    return this.http.post<Article>(ArticleService.URL, o, {
      headers: this.auth.getHeaders(),
    });
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(ArticleService.URL + '/' + id, {
      headers: this.auth.getHeaders(),
    });
  }

  articleToJson(data: Article): any {
    const o = {
      id: data.id,
      nom: data.nom,
      cout: data.cout,
      typeProduit: data.typeProduit,
      volume: data.volume,
      fournisseur: {
        id: data.fournisseur!.id,
      },
    };
    if (!!data.id) {
      Object.assign(o, { id: data.id });
    }
    return o;
  }
}
