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
    //this.boissonService.getAllbyBar(1).subscribe((result) => {
    // this.boisson = result;
    //  });
    console.log('id du bar: ' + localStorage.getItem('idBar'));
    console.log('id du bar: ' + Number(localStorage.getItem('idBar')));

    this.boisson = this.boissonService.getAllbyBar(); // ajouter localStorage.getItem('idBar')
  }

  delete(id: number) {
    this.boissonService.delete(id).subscribe((ok) => {
      this.boisson = this.boissonService.getAllbyBar();
    });
  }
}
