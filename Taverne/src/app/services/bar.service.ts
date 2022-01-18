import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bar } from '../model/inventaire/bar';
import { AuthenticationService } from './Users/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class BarService {
  private static URL: string = 'http://localhost:8080/Taverne/api/bar';
  constructor(private http: HttpClient, private auth: AuthenticationService) {}

  getAll(): Observable<Bar[]> {
    return this.http.get<Bar[]>(BarService.URL);
  }
}
