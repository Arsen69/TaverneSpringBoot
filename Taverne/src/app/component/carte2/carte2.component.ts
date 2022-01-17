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
    this.boisson = this.boissonService.getAllbyBar(1);
  }

  delete(id: number) {
    this.boissonService.delete(id).subscribe((ok) => {
      this.boisson = this.boissonService.getAll();
    });
  }
}
