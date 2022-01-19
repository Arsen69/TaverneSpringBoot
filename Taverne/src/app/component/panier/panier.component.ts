import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  constructor() {}

  hide: boolean = true;

  clientConnected: boolean = false;

  ngOnInit(): void {
    if (localStorage.getItem('role') == 'Client') {
      this.clientConnected = true;
    }
  }

  ngOnChanges() {}

  @Input('panier')
  panier: {
    id: number;
    nom: string;
    prix: number;
    qty: number;
  }[] = [];

  @Input('total')
  total: number = 0;

  @Output()
  paiement: EventEmitter<any> = new EventEmitter();

  @Output()
  commande: EventEmitter<{
    id: number;
    nom: string;
    prix: number;
    qty: number;
  }> = new EventEmitter<{
    id: number;
    nom: string;
    prix: number;
    qty: number;
  }>();

  swap() {
    this.hide = !this.hide;
  }

  addQty(item: { id: number; nom: string; prix: number; qty: number }) {
    this.commande.emit({
      id: item.id!,
      nom: item.nom!,
      prix: item.prix,
      qty: 1,
    });
  }

  remQty(item: { id: number; nom: string; prix: number; qty: number }) {
    this.commande.emit({
      id: item.id!,
      nom: item.nom!,
      prix: item.prix,
      qty: -1,
    });
  }

  passerAuPaiement() {
    if (localStorage.getItem('login') == '') {

    } else {
    this.paiement.emit(true);
    this.swap();
    }
  }
}
