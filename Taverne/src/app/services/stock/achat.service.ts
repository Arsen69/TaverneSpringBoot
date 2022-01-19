import { AuthenticationService } from 'src/app/services/Users/authentication.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AchatService {
  private static URL: string = 'http://localhost:8080/Taverne/api/bar';
  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  public acheter(idClient: number): any {
    let panier = localStorage.getItem('panier');
    let o = { "client": Number(idClient), "panier": panier};
    console.log(o);
    return this.http.post<any>(AchatService.URL + '/panier', o, {
      headers: this.auth.getHeaders(),
    });
  }
}
