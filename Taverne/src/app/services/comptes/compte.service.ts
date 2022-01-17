import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compte } from 'src/app/model/comptes/compte';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root',
})
export class CompteService {
  private static URL: string = 'http://localhost:8080/taverne/comptes';
  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  public getAll(): Observable<Compte[]> {
    return this.http.get<Compte[]>(CompteService.URL, {
      headers: this.auth.getHeaders(),
    });
  }

  public getById(id: number): Observable<Compte> {
    return this.http.get<Compte>(`${CompteService.URL}/${id}`, {
      headers: this.auth.getHeaders(),
    });
  }
}
