import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUnique } from 'src/app/CustomValidators/login-unique';
import { Compte } from 'src/app/model/comptes/compte';
import { InscriptionService } from 'src/app/services/Users/inscription.service';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css'],
})
export class FormInscriptionComponent implements OnInit {
  form: FormGroup;
  role = localStorage.getItem('role');
  typeCompte: string = 'Client';
  compte: Compte = new Compte();

  entreprise: string = '';
  artiste: string = ';';

  passwordCtrl: FormControl = new FormControl('', [Validators.required]);
  confirmCtrl: FormControl = new FormControl('');

  constructor(
    private inscriptionService: InscriptionService,
    private router: Router,
    private loginUnique: LoginUnique
  ) {
    this.form = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        this.loginUnique.checkPasDansListe,
      ]),
      prenom: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      mail: new FormControl('', [Validators.required]),
      birthday: new FormControl('', [Validators.required]),
      entreprise: new FormControl('', [Validators.required]),
      artiste: new FormControl('', [Validators.required]),
      passwordGroup: new FormGroup(
        {
          password: this.passwordCtrl,
          confirm: this.confirmCtrl,
        },
        this.checkEquals
      ),
    });
  }

  checkEquals(group: AbstractControl): ValidationErrors | null {
    let formGroup: FormGroup = group as FormGroup;
    return formGroup.controls['password'].value !=
      formGroup.controls['confirm'].value
      ? { checkequals: true }
      : null;
  }

  ngOnInit(): void {}

  validate() {
    let group = this.form.controls['passwordGroup'] as FormGroup;
    let user = {
      login: this.form.controls['login'].value,
      password: group.controls['password'].value,
      nom: this.form.controls['nom'].value,
      prenom: this.form.controls['prenom'].value,
      mail: this.form.controls['mail'].value,
      entreprise: this.form.controls['entreprise'].value,
      artiste: this.form.controls['artiste'].value,
    };
    this.inscriptionService
      .inscription(user, this.typeCompte)
      .subscribe((ok) => {
        this.router.navigate(['/home']);
      });
  }
}
