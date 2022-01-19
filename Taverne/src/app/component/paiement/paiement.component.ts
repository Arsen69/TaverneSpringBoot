import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css'],
})
export class PaiementComponent implements OnInit {

  @Input('panier')
  panier: {
    id: number;
    nom: string;
    prix: number;
    qty: number;
  }[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}
