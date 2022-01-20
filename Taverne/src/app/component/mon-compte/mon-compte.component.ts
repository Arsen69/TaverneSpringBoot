import { CompteService } from 'src/app/services/comptes/compte.service';
import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/model/comptes/compte';
import { Fournisseur } from 'src/app/model/comptes/fournisseur';
import { InscriptionService } from 'src/app/services/Users/inscription.service';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css'],
})
export class MonCompteComponent implements OnInit {
  constructor(private compteService: CompteService, private inscriptionService: InscriptionService) {}

  idCompte: number = 0;

  compte: Compte = new Compte();
  compteAEnvoye: Compte = new Compte();

  visible: boolean = true;

  newPrenom: string = '';
  newNom: string = '';
  newLogin: string = '';
  newMail: string = '';
  newBirthday: string = '';

  ngOnInit(): void {
    this.compteService.getIdByLoginConnected().subscribe((result) => {
      this.idCompte = result;
      this.compteService.getById(this.idCompte).subscribe((result2) => {
        this.compte = result2;
        this.compteAEnvoye = JSON.parse(JSON.stringify(this.compte));
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

  valider() {
    this.visible = true;
    this.compteAEnvoye.nom = this.newNom;
    this.compteAEnvoye.prenom = this.newPrenom;
    this.compteAEnvoye.birthday = new Date(this.newBirthday);
    this.compteAEnvoye.login = this.newLogin;
    this.compteAEnvoye.mail = this.newMail;
    this.inscriptionService.inscription(this.compteAEnvoye, localStorage.getItem('role')!).subscribe((result) => 1==1);
  }
}
