import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, map, Observable, of } from 'rxjs';
import { DobValide } from 'src/app/CustomValidators/dob-valide';
import { Compte } from 'src/app/model/comptes/compte';
import { CheckDataService } from 'src/app/services/Users/check-data.service';
import { CheckService } from 'src/app/services/Users/check.service';
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

  DOB: Date = new Date();

  entreprise: string = '';
  artiste: string = '';

  passwordCtrl: FormControl = new FormControl('', [Validators.required]);
  confirmCtrl: FormControl = new FormControl('');

  constructor(
    private inscriptionService: InscriptionService,
    private router: Router,
    private checkDataService: CheckDataService,
    private checkData: CheckService
  ) {
    this.form = new FormGroup({
      login: new FormControl(
        '',
        [Validators.required],
        [this.checkDataInList()]
      ),
      prenom: new FormControl(''),
      nom: new FormControl(''),
      mail: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      birthday: new FormControl('', [
        Validators.required,
        DobValide.dobValidate,
      ]),
      entreprise: new FormControl(''),
      artiste: new FormControl(''),
      passwordGroup: new FormGroup(
        {
          password: this.passwordCtrl,
          confirm: this.confirmCtrl,
        },
        this.checkEquals
      ),
    });
  }

  checkDataInList(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkData.check(control.value).pipe(
        map((res: boolean) => {
          return res ? { error: true } : null;
        })
      );
    };
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
    };
    if (this.typeCompte == 'Intervenant' || this.typeCompte == 'Fournisseur') {
      Object.assign(user, {
        entreprise: this.form.controls['entreprise'].value,
      });
    }
    if (this.typeCompte == 'Intervenant') {
      Object.assign(user, { artiste: this.form.controls['artiste'].value });
    }
    this.inscriptionService
      .inscription(user, this.typeCompte)
      .subscribe((ok) => {
        this.router.navigate(['/home']);
      });
  }

  testDate() {
    console.log(this.DOB);
    let d = this.DOB.toString;
    console.log(this.DOB.getMonth());
  }
}
