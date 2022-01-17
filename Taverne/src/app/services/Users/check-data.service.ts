import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckDataService {
  constructor(private http: HttpClient) {}

  checkDataInList(data: any): Observable<any> {
    return this.http.get('http://localhost:8080/Taverne/api/compte');
  }
}
