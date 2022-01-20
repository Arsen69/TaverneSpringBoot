import { Observable } from 'rxjs';
import { Stock } from './../../model/inventaire/stock';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private static URL: string = 'http://localhost:8080/Taverne/api/bar';
  constructor(private http: HttpClient) {}

  /* gérer le idBar en token avant tout */
  public getAll(): Observable<Stock[]> {
    console.log('tu passes dans le getAll');
    /*  console.log(
      StockService.URL + '/' + localStorage.getItem('idBar') + '/stocks'
    ); */
    return this.http.get<Stock[]>(
      StockService.URL + '/' + localStorage.getItem('idBar') + '/stocks'
    );
  }

  public updatelimit(idStock: number, nouveauSeuil: number): Observable<any> {
    console.log('coucou');
    let o = nouveauSeuil;
    console.log(
      StockService.URL +
        '/' +
        localStorage.getItem('idBar') +
        '/stocks/' +
        idStock
    );
    console.log(o);
    return this.http.put<any>(
      StockService.URL +
        '/' +
        localStorage.getItem('idBar') +
        '/stocks/' +
        idStock,
      o
    );
  }
}
