import { Boisson } from './../../model/inventaire/boisson';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-carte-item',
  templateUrl: './carte-item.component.html',
  styleUrls: ['./carte-item.component.css'],
})
export class CarteItemComponent implements OnInit {
  constructor() {}

  @Input('item')
  boisson: Boisson = new Boisson();

  prix: number = 0;

  qty: number = 0;

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

  ngOnInit(): void {
    this.prix = Number(this.boisson.prixHT!) * Number(this.boisson.tva!);
  }

  anim2: boolean = false;

  @HostListener('mouseenter')
  reverseAnim() {
    this.anim2 = true;
  }

  @HostListener('mouseleave')
  reverseAnim2() {
    this.anim2 = false;
  }

  addPanier() {
    this.qty += 1;
    this.commande.emit({id: this.boisson.id!, nom:this.boisson.nom!, prix:this.prix, qty: this.qty});
  }
}
