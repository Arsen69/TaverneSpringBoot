import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { debounceTime, map, Observable } from 'rxjs';
import { CheckDataService } from '../services/Users/check-data.service';

export class LoginUnique {
  constructor(private checkDataService: CheckDataService) {}
}
