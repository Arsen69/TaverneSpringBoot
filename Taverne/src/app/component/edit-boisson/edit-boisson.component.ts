import { BoissonService } from './../../services/boisson.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boisson } from 'src/app/model/inventaire/boisson';
import { Bar } from 'src/app/model/inventaire/bar';
import { Utilisation } from 'src/app/model/inventaire/utilisation';
import { Stock } from 'src/app/model/inventaire/stock';
import { Observable } from 'rxjs';
import { StockService } from 'src/app/services/stock/stock-service.service';

@Component({
  selector: 'app-edit-boisson',
  templateUrl: './edit-boisson.component.html',
  styleUrls: ['./edit-boisson.component.css'],
})
export class EditBoissonComponent implements OnInit {
  boisson: Boisson = new Boisson();
  utilisations: Utilisation[] = [];
  stocks: Observable<Stock[]> | null = null;
  util: Utilisation = new Utilisation();

  constructor(
    private activatedRoute: ActivatedRoute,
    private boissonService: BoissonService,
    private stockService: StockService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (!!params['id']) {
        this.boissonService.getById(params['id']).subscribe((result) => {
          this.boisson = result;
          console.log(this.boisson);
          this.utilisations = this.boisson.utilisations!;
          console.log(this.utilisations);
        });
      }
    });
    this.stocks = this.stockService.getAll();
  }

  save() {
    console.log('entrée dans save');
    console.log('boisson.type:' + this.boisson.type);
    console.log('boisson.id:' + this.boisson.id);
    console.log('boisson.nom:' + this.boisson.nom);

    if (this.boisson.type == 'alcool') {
      console.log('boucle alcool');
      this.boissonService.updateAlcool(this.boisson).subscribe((ok) => {
        this.router.navigate(['/carte2']);
      });
    } else if (this.boisson.type == 'soft') {
      console.log('boucle soft');
      this.boissonService.updateSoft(this.boisson).subscribe((ok) => {
        this.router.navigate(['/carte2']);
      });
    }
  }

  // });
  // } else {
  //   // this.boissonService.createSoft(this.boisson).subscribe((ok) => {
  //   //   this.router.navigate(['/carte2']);

  saveSoft() {
    console.log('entrée dans saveSoft');
    console.log('boisson.id:' + this.boisson.id);
    // if (!!this.boisson.id) {
    this.boissonService.updateSoft(this.boisson).subscribe((ok) => {
      this.router.navigate(['/carte2']);
      // });
      // } else {
      //   // this.boissonService.createSoft(this.boisson).subscribe((ok) => {
      //   //   this.router.navigate(['/carte2']);
    });
  }

  ajouterUtil() {
    console.log(this.utilisations);
    this.utilisations.push(new Utilisation());
    console.log(this.utilisations);
    console.log(this.boisson.utilisations);
    this.boisson.utilisations = this.utilisations;
  }

  byId(obj1: Stock, obj2: Stock): boolean {
    if (!!obj2 && !!obj1) {
      return obj1.idStock === obj2.idStock;
    }
    return false;
  }

  saveAlcool() {
    console.log('entrée dans saveAlcool');
    this.boissonService.updateAlcool(this.boisson).subscribe((ok) => {
      this.router.navigate(['/carte2']);
    });
  }
}
