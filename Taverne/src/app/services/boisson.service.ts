import { Injectable } from '@angular/core';
import { Boisson } from '../model/inventaire/boisson';
import { Bar } from 'src/app/model/inventaire/bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './Users/authentication.service';
import { Utilisation } from '../model/inventaire/utilisation';

@Injectable({
  providedIn: 'root',
})
export class BoissonService {
  private static URL: string = 'http://localhost:8080/Taverne/api/bar';
  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  private idBar = localStorage.getItem('idBar');

  public getAll(): Observable<Boisson[]> {
    return this.http.get<Boisson[]>(BoissonService.URL + '/boissons', {
      // headers: this.auth.headers, //authentification des clients pour voir les boissons
    });
  }

  public getAllbyBar(idBar: number): Observable<Boisson[]> {
    return this.http.get<Boisson[]>(
      BoissonService.URL + '/' + this.idBar + '/boissons',
      {
        // headers: this.auth.headers, //authentification des clients pour voir les boissons
      }
    );
  }

  public getById(id: number): Observable<Boisson> {
    return this.http.get<Boisson>(BoissonService.URL + '/boisson/' + id, {
      headers: this.auth.getHeaders(),
    });
  }

  public updateSoft(boisson: Boisson): Observable<Boisson> {
    const b = this.formatBoissonToJson(boisson);
    return this.http.put<Boisson>(
      BoissonService.URL + '/' + this.idBar + '/soft/' + boisson.id,
      b,
      {
        headers: this.auth.getHeaders(),
      }
    );
  }

  public updateAlcool(boisson: Boisson): Observable<Boisson> {
    const b = this.formatBoissonToJson(boisson);
    return this.http.put<Boisson>(
      BoissonService.URL + '/' + this.idBar + '/alcool/' + boisson.id,
      b,
      {
        headers: this.auth.getHeaders(),
      }
    );
  }

  public createSoft(boisson: Boisson): Observable<Boisson> {
    const o = this.formatBoissonToJson(boisson);
    return this.http.post<Boisson>(
      BoissonService.URL + '/' + this.idBar + '/soft',
      o,
      {
        headers: this.auth.getHeaders(),
      }
    );
  }

  public createAlcool(boisson: Boisson): Observable<Boisson> {
    const o = this.formatBoissonToJson(boisson);
    return this.http.post<Boisson>(
      BoissonService.URL + '/' + this.idBar + '/alcool',
      o,
      {
        headers: this.auth.getHeaders(),
      }
    );
  }

  public delete(id: number, idBar: number): Observable<void> {
    return this.http.delete<void>(
      BoissonService.URL + '/' + this.idBar + '/boisson/' + id,
      {
        headers: this.auth.getHeaders(),
      }
    );
  }

  formatBoissonToJson(boisson: Boisson): Object {
    let id_Bar = Number(this.idBar);
    var utils: Object[] = [];
    const b = {
      nom: boisson.nom,
      bar: { idBar: id_Bar },
      prixHT: boisson.prixHT,
      prixHThh: boisson.prixHThh,
    };
    for (let u of boisson.utilisations!) {
      if (!!u.id) {
        utils.push({
          id: u.id,
          volume: u.volume,
          ingredient: { idStock: u.ingredient!.idStock },
        });
      }
      utils.push({
        volume: u.volume,
        ingredient: { idStock: u.ingredient!.idStock },
      });
      console.log(b);
    }
    Object.assign(b, { utilisations: utils });
    if (!!boisson.id) {
      Object.assign(b, { id: boisson.id });
    }
    console.log(b);
    return b;
  }
}
