import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckDataService {
  constructor(private http: HttpClient) {}

  public checkDataInList(data: string): Observable<any> | null {
    this.http
      .get('http://localhost:8080/Taverne/api/compte/login' + data)
      .subscribe({
        next: (v) => {
          return v;
        },
        error: (e) => {
          return e;
        },
        complete: () => {
          return null;
        },
      });
    return null;
  }
}
