import { CarteComponent } from './component/carte/carte.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:"full"},
  { path: 'home', component: AccueilComponent},
  { path: 'connexion', component: ConnexionComponent },
  { path: 'carte', component: CarteComponent },
];
