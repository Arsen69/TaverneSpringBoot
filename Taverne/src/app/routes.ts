import { CarteComponent } from './component/carte/carte.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { Routes } from '@angular/router';
import { LogOffComponent } from './connexion/log-off/log-off.component';
import { InscriptionComponent } from './connexion/inscription/inscription.component';
import { Carte2Component } from './component/carte2/carte2.component';
import { LoginComponent } from './connexion/login/login.component';
import { AuthenticationService } from './services/Users/authentication.service';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AccueilComponent },
  { path: 'carte', component: CarteComponent },
  {
    path: 'connexion',
    component: LoginComponent,
    canActivate: [AuthenticationService],
  },
  { path: 'monCompte', component: LogOffComponent },
  {
    path: 'inscription',
    component: InscriptionComponent,
  },
  { path: 'carte2', component: Carte2Component },
];
