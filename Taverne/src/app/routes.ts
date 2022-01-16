import { CarteComponent } from './component/carte/carte.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { Carte2Component } from './component/carte2/carte2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'carte', component: CarteComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'carte2', component: Carte2Component },
];
