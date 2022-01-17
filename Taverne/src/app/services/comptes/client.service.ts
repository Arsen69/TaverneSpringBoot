import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService implements CanActivate {
  constructor() {}

  canActivate(): boolean {
    if (localStorage.getItem('role') == 'Client') {
      return true;
    } else {
      return false;
    }
  }
}
