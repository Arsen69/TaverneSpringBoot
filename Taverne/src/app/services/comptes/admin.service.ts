import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService implements CanActivate {
  constructor() {}
  canActivate(): boolean {
    if (localStorage.getItem('role') == 'Admin') {
      return true;
    } else {
      return false;
    }
  }
}
