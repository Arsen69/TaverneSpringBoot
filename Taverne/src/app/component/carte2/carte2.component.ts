import { Boisson } from './../../model/inventaire/boisson';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoissonService } from 'src/app/services/boisson.service';
import { Bar } from 'src/app/model/inventaire/bar';
import { BarService } from 'src/app/services/bar.service';

@Component({
  selector: 'app-carte2',
  templateUrl: './carte2.component.html',
  styleUrls: ['./carte2.component.css'],
})
export class Carte2Component implements OnInit {
  boissons: Observable<Boisson[]> | null = null;
  idBar: number = 0;

  bar: Bar = new Bar();
  constructor(
    private boissonService: BoissonService,
    private barService: BarService
  ) {}

  ngOnInit(): void {
    this.idBar = Number(localStorage.getItem('idBar'));
    this.barService.getById(this.idBar).subscribe((result) => {
      this.bar = result;
    });
    this.boissons = this.boissonService.getAllbyBar(this.idBar);
  }

  delete(id: number) {
    this.boissonService.delete(id, this.idBar).subscribe((ok) => {
      this.boissons = this.boissonService.getAllbyBar(this.idBar);
    });
  }
}
