import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Compte } from 'src/app/model/comptes/compte';
import { InscriptionService } from 'src/app/services/inscription.service';

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

  passwordCtrl: FormControl = new FormControl('', [Validators.required]);
  confirmCtrl: FormControl = new FormControl('');

  constructor(
    private inscriptionService: InscriptionService,
    private router: Router
  ) {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
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
    let user = new Compte(
      this.form.controls['login'].value,
      group.controls['password'].value
    );
    this.inscriptionService
      .inscription(user, this.typeCompte)
      .subscribe((ok) => {
        this.router.navigate(['/home']);
      });
  }
}
