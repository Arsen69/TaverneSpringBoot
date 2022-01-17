import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/model/comptes/admin';
import { Client } from 'src/app/model/comptes/client';
import { Employe } from 'src/app/model/comptes/employe';
import { Fournisseur } from 'src/app/model/comptes/fournisseur';
import { Intervenant } from 'src/app/model/comptes/intervenant';

@Injectable({
  providedIn: 'root',
})
export class InscriptionService {
  constructor(private http: HttpClient) {}

  inscription(compte: any, type: string): Observable<any> {
    let o;
    if (type == 'Client') {
      o = this.compteToJson(compte as Client);
    } else if (type == 'Admin') {
      o = this.compteToJson(compte as Admin);
    } else if (type == 'Fournisseur') {
      o = this.fournisseurToJson(compte as Fournisseur);
    } else if (type == 'Employe') {
      o = this.employeToJson(compte as Employe);
    } else if (type == 'Intervenant') {
      o = this.intervenantToJson(compte as Intervenant);
    }

    return this.http.post(
      'http://localhost:8080/Taverne/api/compte/' + type,
      o
    );
  }

  compteToJson(c: Client | Admin): any {
    return {
      nom: c.nom,
      prenom: c.prenom,
      login: c.login,
      password: c.password,
      mail: c.mail,
      enabled: true,
    };
  }

  fournisseurToJson(c: Fournisseur): any {
    return Object.assign(this.compteToJson(c), { entreprise: c.entreprise });
  }

  employeToJson(c: Employe): any {
    return Object.assign(this.compteToJson(c), { entreprise: c.bar });
  }
  intervenantToJson(c: Intervenant): any {
    return Object.assign(this.compteToJson(c), { entreprise: c.artiste });
  }
}
