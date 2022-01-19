import { MonCompteComponent } from './component/mon-compte/mon-compte.component';
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
import { AchatEffectueComponent } from './component/achat-effectue/achat-effectue.component';
import { AdminService } from './services/comptes/admin.service';

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
    component: MonCompteComponent,
    canActivate: [BarChosenService],
  },
  {
    path: 'inscription',
    component: InscriptionComponent,
  },
  {
    path: 'carte2',
    component: Carte2Component,
    canActivate: [BarChosenService, AdminService],
  },
  {
    path: 'stock',
    component: StockListComponent,
    canActivate: [BarChosenService, AdminService],
  },
  { path: 'choixBar', component: ChoixBarComponent },
  {
    path: 'listStock',
    component: StockListComponent,
    canActivate: [BarChosenService, AdminService],
  },
  {
    path: 'boisson/edit',
    component: EditBoissonComponent,
    canActivate: [BarChosenService, AdminService],
  },
  {
    path: 'boisson/edit/:id',
    component: EditBoissonComponent,
    canActivate: [BarChosenService, AdminService],
  },
  {
    path: 'catalogue',
    component: CatalogueGlobalComponent,
    canActivate: [BarChosenService],
  },
  { path: 'choixBar', component: ChoixBarComponent },
  { path: 'achatDone', component: AchatEffectueComponent },
];
