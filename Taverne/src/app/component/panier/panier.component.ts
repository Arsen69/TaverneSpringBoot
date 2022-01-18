import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input('panier')
  panier:{
    id: number;
    nom: string;
    prix: number;
    qty: number;
  }[] = [];

  Temporary() {
    console.log(this.panier)
  }

}
