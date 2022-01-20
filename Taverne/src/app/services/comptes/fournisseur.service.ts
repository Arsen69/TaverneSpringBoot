import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FournisseurService implements CanActivate {
  constructor() {}

  canActivate(): boolean {
    if (localStorage.getItem('role') == 'Fournisseur') {
      return true;
    } else {
      return false;
    }
  }
}
