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
  role = localStorage.getItem('role');
  visible: boolean = false;

  stock: Stock = new Stock();

  ngOnInit(): void {
    this.stock.idStock = this.stockRecu.idStock;
    this.stock.volumeTot = this.stockRecu.volumeTot;
    this.stock.seuilLimite = this.stockRecu.seuilLimite;
    this.stock.articles = this.stockRecu.articles;
  }

  validation() {
    console.log(this.stock);
    this.visible = false;
  }

  modifier() {
    console.log(this.stock.idStock);
    console.log(this.stock.articles![0].nom);
    this.visible = true;
    console.log(this.visible);
  }

  if(visible = true) {}
}
