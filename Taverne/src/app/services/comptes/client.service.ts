import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

  canActivate(): boolean {
    if (localStorage.getItem('role') == 'Client') {
      return true;
    } else {
      return false;
    }
  }
}
