import { Stock } from './../../../model/inventaire/stock';
import { Component, Input, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock/stock-service.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css'],
})
export class StockListComponent implements OnInit {
  constructor(private StockService: StockService) {}
  stock: Stock[] = [];

  ngOnInit(): void {
    console.log(localStorage.getItem('idBar'));
    this.StockService.getAll().subscribe((result) => {
      this.stock = result;
      console.log(result);
    });
  }
}
