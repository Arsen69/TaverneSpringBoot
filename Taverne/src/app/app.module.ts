import { EditBoissonComponent } from './component/edit-boisson/edit-boisson.component';
import { StockListComponent } from './component/stock/stock-list/stock-list.component';
import { StockComponent } from './component/stock/stock/stock.component';
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
import { Carte2Component } from './component/carte2/carte2.component';
import { FooterComponent } from './component/footer/footer.component';
import { ChoixBarComponent } from './component/Bars/choix-bar/choix-bar.component';
import { CarteItemComponent } from './component/carte-item/carte-item.component';
import { FormInscriptionComponent } from './connexion/form-inscription/form-inscription.component';
import { PanierComponent } from './component/panier/panier.component';
import { CatalogueGlobalComponent } from './component/articles/catalogue-global/catalogue-global.component';
import { ArticleComponent } from './component/articles/article/article.component';
import { FormArticleComponent } from './component/articles/form-article/form-article.component';
import { DisplayBarComponent } from './component/Bars/display-bar/display-bar.component';
import { PaiementComponent } from './component/paiement/paiement.component';
import { CheckService } from './services/Users/check.service';
import { CheckDataService } from './services/Users/check-data.service';

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
    LogOffComponent,
    InscriptionComponent,
    FormInscriptionComponent,
    ChoixBarComponent,
    CarteItemComponent,
    PanierComponent,
    StockComponent,
    StockListComponent,
    EditBoissonComponent,
    CatalogueGlobalComponent,
    ArticleComponent,
    FormArticleComponent,
    DisplayBarComponent,
    PaiementComponent,
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
