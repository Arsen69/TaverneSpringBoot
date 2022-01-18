import { Stock } from './../../../model/inventaire/stock';
import { StockService } from './../../../services/stock/stock-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  constructor(private StockService: StockService) {}

  listeStock: Stock[] = [];
  ngOnInit(): void {}
  validation() {
    this.stockList();
  }

  stockList() {
    this.StockService.getAll().subscribe((result) => {
      this.listeStock = result;
      console.log(this.listeStock);
    });
  }
}
