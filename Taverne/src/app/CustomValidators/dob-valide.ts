import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { CheckDataService } from '../services/Users/check-data.service';

export class DobValide {
  constructor(private checkDataService: CheckDataService) {}

  public static dobValidate(control: AbstractControl): ValidationErrors | null {
    var enteredValue = control.value;
    var today = new Date();
    var birthDate = new Date(enteredValue);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age < 18 ? { invalide: true } : null;
  }
}
