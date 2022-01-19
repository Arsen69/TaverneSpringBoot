import { Injectable } from '@angular/core';
import { Boisson } from '../model/inventaire/boisson';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoissonService {
  private static URL: string = 'http://localhost:8080/Taverne/api/bar';
  constructor(
    private http: HttpClient //private auth: AuthentificationService
  ) {}

  public getAll(): Observable<Boisson[]> {
    return this.http.get<Boisson[]>(BoissonService.URL + '/boissons', {
      // headers: this.auth.headers, //authentification des clients pour voir les boissons
    });
  }

  public getAllbyBar(idBar: number): Observable<Boisson[]> {
    return this.http.get<Boisson[]>(
      BoissonService.URL + '/' + localStorage.getItem('idBar') + '/boissons',
      {
        // headers: this.auth.headers, //authentification des clients pour voir les boissons
      }
    );
  }

  public getById(id: number): Observable<Boisson> {
    return this.http.get<Boisson>(BoissonService.URL + '/boisson/' + id, {
      // headers: this.auth.headers,
    });
  }

  public updateSoft(
    boisson: Boisson,
    id: number,
    idBar: number
  ): Observable<Boisson> {
    const b = this.formatBoissonToJson(boisson);
    return this.http.put<Boisson>(
      BoissonService.URL + '/' + localStorage.getItem('idBar') + '/soft/' + id,
      b,
      {
        //headers: this.auth.headers,
      }
    );
  }

  // updateSoft(boisson: Boisson): Observable<Boisson> {
  //   return this.http.put<Boisson>(
  //     BoissonService.URL + '/' + boisson.id,
  //     this.formatPersonnageToJson(boisson)
  //     // {
  //     //   headers: this.auth.headers,
  //     // }
  //   );
  // }

  public updateAlcool(
    boisson: Boisson,
    id: number,
    idBar: number
  ): Observable<Boisson> {
    return this.http.put<Boisson>(
      BoissonService.URL +
        '/' +
        localStorage.getItem('idBar') +
        '/alcool/' +
        id,
      {
        //headers: this.auth.headers,
      }
    );
  }

  // public createSoft(boisson: Boisson): Observable<Boisson> {
  //   const o = {
  //     nom: boisson.nom,
  //   };
  //   return this.http.post<Boisson>(BoissonService.URL + id + soft {
  //     //headers: this.auth.headers,
  //   });
  // }

  // public createAlcool(boisson: Boisson): Observable<Boisson> {
  //   const o = {
  //     nom: boisson.nom,
  //   };
  //   return this.http.post<Boisson>(BoissonService.URL, o, {
  //     //headers: this.auth.headers,
  //   });
  // }

  public delete(id: number, idBar: number): Observable<void> {
    return this.http.delete<void>(
      BoissonService.URL +
        '/' +
        localStorage.getItem('idBar') +
        '/boisson/' +
        id,
      {
        //headers: this.auth.headers,
      }
    );
  }

  formatBoissonToJson(boisson: Boisson): Object {
    const b = {
      id: boisson.id,
      nom: boisson.nom,
      idBar: boisson.idBar,
    };

    // if (!!personnage.familier && personnage.familier.id !== undefined) {
    //   Object.assign(p, { familier: { id: personnage.familier.id } });
    // }
    // if (!!personnage.id) {
    //   Object.assign(p, { id: personnage.id });
    // }
    return b;
  }
}
