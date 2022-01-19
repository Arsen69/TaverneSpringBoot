import { CompteService } from 'src/app/services/comptes/compte.service';
import { Component, Input, OnInit } from '@angular/core';
import { AchatService } from 'src/app/services/stock/achat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css'],
})
export class PaiementComponent implements OnInit {
  @Input('panier')
  panier: {
    id: number;
    nom: string;
    prix: number;
    qty: number;
  }[] = [];

  @Input('total')
  total: number = 0;

  achatEffectue: boolean = false;

  constructor(
    private compteService: CompteService,
    private achatService: AchatService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  acheter() {
    let idClient: number;
    this.compteService.getIdByLoginConnected().subscribe((result) => {
      idClient = result;
    });
    setTimeout(() => {
      this.achatEffectue = true;

      setTimeout(() => {
        let subscription = this.achatService
          .acheter(idClient)
          .subscribe((ok: any) => localStorage.setItem('panier', ''));
      }, 1000);
    }, 1500);
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 1500);
  }
}
