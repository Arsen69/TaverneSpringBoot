/* import { ConnexionComponent } from './component/connexion/connexion.component'; */
import { CarteComponent } from './component/carte/carte.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { Routes } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { LogOffComponent } from './connexion/log-off/log-off.component';
import { InscriptionComponent } from './connexion/inscription/inscription.component';
import { Carte2Component } from './component/carte2/carte2.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AccueilComponent },
  /*  { path: 'connexion', component: ConnexionComponent }, */
  { path: 'carte', component: CarteComponent },
  {
    path: 'connexion',
    component: LoginComponent,
    /* canActivate: [AuthenticationService], */
  },
  { path: 'monCompte', component: LogOffComponent },
  {
    path: 'inscription',
    component: InscriptionComponent,
  },
  { path: 'carte2', component: Carte2Component },
];
