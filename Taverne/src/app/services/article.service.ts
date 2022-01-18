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

  public acheterArticle(id: number, idBar: number): Observable<Article> {
    return this.http.get<Article>(
      ArticleService.URL + '/' + id + '/bar/' + idBar,
      {
        headers: this.auth.getHeaders(),
      }
    );
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
    return this.http.put<Article>(ArticleService.URL + '/' + data.id, data, {
      headers: this.auth.getHeaders(),
    });
  }

  public create(data: Article): Observable<Article> {
    const o = {
      nom: data.nom,
      cout: data.cout,
      typeProduit: data.typeProduit,
      volume: data.volume,
      fournisseur: {
        id: this.http.get<any>(
          'http://localhost:8080/Taverne/api/compte/login/' +
            localStorage.getItem('login'),
          {
            headers: this.auth.getHeaders(),
          }
        ),
      },
    };
    return this.http.post<Article>(ArticleService.URL, data, {
      headers: this.auth.getHeaders(),
    });
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(ArticleService.URL + '/' + id, {
      headers: this.auth.getHeaders(),
    });
  }
}
