import { CarteComponent } from './component/carte/carte.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AccueilComponent },
  { path: 'carte', component: CarteComponent },
  { path: 'connexion', component: LoginComponent },
];
