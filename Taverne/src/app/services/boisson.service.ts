import { Injectable } from '@angular/core';
import { Boisson } from '../model/inventaire/boisson';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoissonService {
  private static URL: string = 'http://localhost:8080/Taverne/boisson';
  constructor(
    private http: HttpClient //private auth: AuthentificationService
  ) {}

  public getAll(): Observable<Boisson[]> {
    return this.http.get<Boisson[]>(BoissonService.URL, {
      // headers: this.auth.headers, //authentification des clients pour voir les boissons
    });
  }

  public getAllbyBar(id: number): Observable<Boisson[]> {
    return this.http.get<Boisson[]>(BoissonService.URL + '/bar' + '/' + id, {
      // headers: this.auth.headers, //authentification des clients pour voir les boissons
    });
  }

  public getById(id: number): Observable<Boisson> {
    return this.http.get<Boisson>(BoissonService.URL + '/' + id, {
      // headers: this.auth.headers,
    });
  }

  public update(boisson: Boisson): Observable<Boisson> {
    return this.http.put<Boisson>(
      BoissonService.URL + '/' + boisson.id,
      boisson,
      {
        //headers: this.auth.headers,
      }
    );
  }

  public create(boisson: Boisson): Observable<Boisson> {
    const o = {
      nom: boisson.nom,
    };
    return this.http.post<Boisson>(BoissonService.URL, o, {
      //headers: this.auth.headers,
    });
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(BoissonService.URL + '/' + id, {
      //headers: this.auth.headers,
    });
  }
}
