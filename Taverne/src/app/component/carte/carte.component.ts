import { Boisson } from './../../model/inventaire/boisson';
import { BoissonService } from './../../services/boisson.service';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
})
export class CarteComponent implements OnInit {
  constructor(private boissonService: BoissonService) {}

  listeBoisson: Boisson[] = [];

  idBar: number = Number(localStorage.getItem('idBar'));



  ngOnInit() {
    this.initCarte();
    console.log(this.idBar);
  }


  initCarte() {
    this.boissonService.getAllbyBar(Number(localStorage.getItem('idBar'))).subscribe((result) => {
      this.listeBoisson = result;
    });
    console.log(this.listeBoisson);
  }

  deleteBar() {
    localStorage.removeItem('idBar');
    localStorage.setItem('idBar', '0');
    window.location.reload();
  }
}

