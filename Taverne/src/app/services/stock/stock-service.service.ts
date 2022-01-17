import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StockServiceService {
  private static URL: string = 'http://localhost:8080/lotr/api/stock';

  /* gérer le idBar en token avant tout */

  constructor() {}
}
