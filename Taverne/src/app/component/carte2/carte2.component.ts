import { Boisson } from './../../model/inventaire/boisson';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoissonService } from 'src/app/services/boisson.service';

@Component({
  selector: 'app-carte2',
  templateUrl: './carte2.component.html',
  styleUrls: ['./carte2.component.css'],
})
export class Carte2Component implements OnInit {
  boisson: Observable<Boisson[]> | null = null;
  //boisson: Boisson[] = [];
  constructor(private boissonService: BoissonService) {}

  ngOnInit(): void {
    //this.boissonService.getAllbyBar(1).subscribe((result) => {
    // this.boisson = result;
    //  });
    console.log('id du bar: ' + localStorage.getItem('idBar'));
    console.log('id du bar: ' + Number(localStorage.getItem('idBar')));

    this.boisson = this.boissonService.getAllbyBar(
      Number(localStorage.getItem('idBar'))
    ); // ajouter localStorage.getItem('idBar')
  }

  delete(id: number, idBar: number) {
    this.boissonService.delete(id, idBar).subscribe((ok) => {
      this.boisson = this.boissonService.getAllbyBar(
        Number(localStorage.getItem('idBar'))
      );
    });
  }
}
