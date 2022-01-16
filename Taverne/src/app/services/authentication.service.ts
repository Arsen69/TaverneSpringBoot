import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from '../model/comptes/compte';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  public getHeaders(): HttpHeaders {
    if (localStorage.getItem('token') != null) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + localStorage.getItem('token'),
      });
    }
    return new HttpHeaders();
  }

  public login(login: string, password: string): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(login + ':' + password),
    });
    return this.http.get<any>(
      'http://localhost:8080/Taverne/api/compte/login/' + login,
      {
        headers: headers,
      }
    );
  }
}