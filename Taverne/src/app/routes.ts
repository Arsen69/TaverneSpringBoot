import { StockListComponent } from './component/stock/stock-list/stock-list.component';
import { EditBoissonComponent } from './component/edit-boisson/edit-boisson.component';

import { CarteComponent } from './component/carte/carte.component';
import { ChoixBarComponent } from './component/Bars/choix-bar/choix-bar.component';

import { AccueilComponent } from './component/accueil/accueil.component';
import { Routes } from '@angular/router';
import { LogOffComponent } from './connexion/log-off/log-off.component';
import { InscriptionComponent } from './connexion/inscription/inscription.component';
import { Carte2Component } from './component/carte2/carte2.component';
import { LoginComponent } from './connexion/login/login.component';
import { AuthenticationService } from './services/Users/authentication.service';
import { CatalogueGlobalComponent } from './component/articles/catalogue-global/catalogue-global.component';
import { BarChosenService } from './services/Users/bar-chosen.service';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: AccueilComponent,
    canActivate: [BarChosenService],
  },
  { path: 'carte', component: CarteComponent, canActivate: [BarChosenService] },
  {
    path: 'connexion',
    component: LoginComponent,
    canActivate: [AuthenticationService],
  },
  {
    path: 'monCompte',
    component: LogOffComponent,
    canActivate: [BarChosenService],
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
  },
  { path: 'carte2', component: Carte2Component },
  { path: 'stock', component: StockListComponent },
  { path: 'choixBar', component: ChoixBarComponent },
  { path: 'listStock', component: StockListComponent },
  {
    path: 'boisson/edit',
    component: EditBoissonComponent,
    //canActivate: [AuthenticationService],
  },
  {
    path: 'boisson/edit/:id',
    component: EditBoissonComponent,
    //canActivate: [AuthenticationService],
  },
  { path: 'catalogue', component: CatalogueGlobalComponent },
  { path: 'choixBar', component: ChoixBarComponent },
];
