import { Compte } from './../model/comptes/compte';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ComptesService {
  private static URL: string = 'http://localhost:8080/taverne/comptes';
  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  public getAll(): Observable<Compte[]> {
    return this.http.get<Compte[]>(ComptesService.URL, {
      headers: this.auth.getHeaders(),
    });
  }

  public getById(id: number): Observable<Compte> {
    return this.http.get<Compte>(`${ComptesService.URL}/${id}`, {
      headers: this.auth.getHeaders(),
    });
  }
}
