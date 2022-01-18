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

  stock: Stock = new Stock();

  ngOnInit(): void {
    this.stock.idStock = this.stockRecu.idStock;
    this.stock.volumeTot = this.stockRecu.volumeTot;
    this.stock.seuilLimite = this.stockRecu.seuilLimite;
    this.stock.articles = this.stockRecu.articles;
  }

  validation() {
    console.log(this.stock);
  }

  /* stockList() {
    this.StockService.getAll().subscribe((result) => {
      this.listeStock = result;
      console.log(this.listeStock);
    });
  } */
}
