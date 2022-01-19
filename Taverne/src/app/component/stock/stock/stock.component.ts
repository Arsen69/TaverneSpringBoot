import { Observable } from 'rxjs';
import { Stock } from './../../../model/inventaire/stock';
import { StockService } from './../../../services/stock/stock-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock,[app-stock]',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  constructor(private StockService: StockService) {}

  @Input()
  stockRecu: Stock = new Stock();
  /* stockRecus: Observable<Stock> = new Stock(); */

  role = localStorage.getItem('role');
  visible: boolean = false;
  stock: Stock = new Stock();
  variableresult: number = 0;

  ngOnInit(): void {
    this.stock.idStock = this.stockRecu.idStock;
    this.stock.volumeTot = this.stockRecu.volumeTot;
    this.stock.seuilLimite = this.stockRecu.seuilLimite;
    this.stock.articles = this.stockRecu.articles;
  }

  modifier() {
    console.log(this.stock.idStock);
    this.visible = true;
  }

  save() {
    this.visible = false;
    console.log(this.stock);
    console.log('changement du ID ' + this.stock.idStock);
    console.log('nouvau seuil ' + this.stock.seuilLimite);
    this.StockService.updatelimit(
      this.stock.idStock!,
      this.stock.seuilLimite!
    ).subscribe((result) => {
      console.log(result);
      this.stockRecu.seuilLimite = result.seuilLimite;
      this.stock.seuilLimite = result.seuilLimite;
    });
  }

  cancel() {
    this.visible = false;
    this.stock.seuilLimite = this.stockRecu.seuilLimite;
  }
}
