import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckService {
  constructor(private http: HttpClient) {}

  public check(data: string): Observable<any> {
    console.log(data);
    return this.http.get(
      'http://localhost:8080/Taverne/api/compte/bool/' + data
    );
  }
}
