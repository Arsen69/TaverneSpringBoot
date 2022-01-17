import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor() {}
  canActivate(): boolean {
    if (localStorage.getItem('role') == 'Admin') {
      return true;
    } else {
      return false;
    }
  }
}
