import { Boisson } from './../../model/inventaire/boisson';
import { BoissonService } from './../../services/boisson.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
})
export class CarteComponent implements OnInit {
  constructor(private boissonService: BoissonService) {}

  listeBoisson: Boisson[] = [];

  ngOnInit() {
    this.initCarte();
  }

  initCarte() {
    this.boissonService.getAllbyBar(1).subscribe((result) => {
      this.listeBoisson = result;
    });
    console.log(this.listeBoisson);
  }
}

