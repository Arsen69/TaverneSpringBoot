import { CompteService } from 'src/app/services/comptes/compte.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  constructor(private compteService: CompteService) {}

  role: String = '';

  ngOnInit(): void {
    if (localStorage.getItem('role') != null) {
      this.role = localStorage.getItem('role')!;
    }
  }
}
