import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BarChosenService implements CanActivate {
  canActivate(): boolean {
    let tokenBar = localStorage.getItem('bar');
    if (tokenBar != null || tokenBar != 0 || tokenBar != '') {
      return true;
    } else {
      return false;
    }
  }

  constructor(private router: Router) {}
}
