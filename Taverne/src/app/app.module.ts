import { StockComponent } from './component/stock/stock.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './component/accueil/accueil.component';
import { CarteComponent } from './component/carte/carte.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './connexion/login/login.component';
import { LogOffComponent } from './connexion/log-off/log-off.component';
import { InscriptionComponent } from './connexion/inscription/inscription.component';
import { FormInscriptionComponent } from './connexion/form-inscription/form-inscription.component';
//import { StockComponent } from './component/stock/stock.component';
import { Carte2Component } from './component/carte2/carte2.component';
import { FooterComponent } from './component/footer/footer.component';
import { CarteItemComponent } from './component/carte-item/carte-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CarteComponent,
    HeaderComponent,
    LoginComponent,
    HeaderComponent,
    Carte2Component,
    FooterComponent,
    //StockComponent
    LogOffComponent,
    InscriptionComponent,
    FormInscriptionComponent,
    CarteItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
