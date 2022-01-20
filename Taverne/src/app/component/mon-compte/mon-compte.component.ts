import { CompteService } from 'src/app/services/comptes/compte.service';
import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/model/comptes/compte';
import { Fournisseur } from 'src/app/model/comptes/fournisseur';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css'],
})
export class MonCompteComponent implements OnInit {
  constructor(private compteService: CompteService) {}

  idCompte: number = 0;

  compte: Compte = new Compte();

  visible: boolean = true;

  newPrenom: String = '';
  newNom: String = '';
  newLogin: String = '';
  newMail: String = '';
  newBirthday: String = '';

  ngOnInit(): void {
    this.compteService.getIdByLoginConnected().subscribe((result) => {
      this.idCompte = result;
      this.compteService.getById(this.idCompte).subscribe((result2) => {
        this.compte = result2;
        console.log(this.compte);
      });
    });
  }

  modifier() {
    this.visible = false;
  }

  annuler() {
    this.visible = true;
    this.newPrenom = '';
  }
}
