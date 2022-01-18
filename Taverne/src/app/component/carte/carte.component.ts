import { Boisson } from './../../model/inventaire/boisson';
import { BoissonService } from './../../services/boisson.service';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
})
export class CarteComponent implements OnInit {
  constructor(private boissonService: BoissonService, private router: Router) {}

  listeBoisson: Boisson[] = [];

  panier: {
    id: number;
    nom: string;
    prix: number;
    qty: number;
  }[] = [];

  idBar: number = Number(localStorage.getItem('idBar'));

  ngOnInit() {
    this.initCarte();
    setTimeout(() => {
      if (localStorage.getItem('panier') != null) {
        this.decodePanier(localStorage.getItem('panier')!);
      }
    }, 500);
  }

  initCarte() {
    if (Number(localStorage.getItem('idBar')) != 0) {
      this.boissonService
        .getAllbyBar(Number(localStorage.getItem('idBar')))
        .subscribe((result) => {
          this.listeBoisson = result;
        });
    }
  }

  deleteBar() {
    localStorage.removeItem('idBar');
    localStorage.removeItem('panier');
    this.router.navigate(['/choixBar']);
  }

  addPanier(nouvelleCommande: {
    id: number;
    nom: string;
    prix: number;
    qty: number;
  }) {
    let incremented = false;
    if (nouvelleCommande.qty == 0) {
      for (let o of this.panier) {
        if (o.id == nouvelleCommande.id) {
          this.panier.splice(this.panier.indexOf(o), 1);
        }
      }
    } else {
      for (let o of this.panier) {
        if (o.id == nouvelleCommande.id) {
          o.qty += 1;
          incremented = true;
        }
      }
      if (!incremented) {
        this.panier.push(nouvelleCommande);
      }
    }
    localStorage.removeItem('panier');
    localStorage.setItem('panier', this.objectToString(this.panier));
  }

  objectToString(
    liste: {
      id: number;
      nom: string;
      prix: number;
      qty: number;
    }[]
  ): string {
    let codedString: string = '';
    for (let o of liste) {
      codedString += String(o.id);
      codedString += ':';
      codedString += String(o.qty);
      codedString += ';';
    }
    codedString = codedString.slice(0, codedString.length - 1);
    return codedString;
  }

  decodePanier(code: string) {
    let cutString: string[];
    cutString = code.split(';');
    let restoredPanier: {
      id: number;
      nom: string;
      prix: number;
      qty: number;
    }[] = [];

    for (let str of cutString) {
      let doubleCut: string[];
      doubleCut = str.split(':');
      for (let boissons of this.listeBoisson) {
        if (boissons.id == Number(doubleCut[0])) {
          restoredPanier.push({
            id: Number(doubleCut[0]),
            nom: boissons.nom!,
            prix: Number(boissons.prixHT! * boissons.tva!),
            qty: Number(doubleCut[1]),
          });
        }
      }
    }
    console.log(localStorage.getItem('panier'));
    console.log(restoredPanier);
    this.panier = restoredPanier;
  }
}
