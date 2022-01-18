import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { debounceTime, map, Observable } from 'rxjs';
import { CheckDataService } from '../services/Users/check-data.service';

@Injectable({
  providedIn: 'root',
})
export class LoginUnique {
  constructor(private checkDataService: CheckDataService) {}

  public checkPasDansListe(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkDataService.checkDataInList(control.value)!.pipe(
        debounceTime(1000),
        map((res: boolean) => {
          return res ? { checkDataInList: true } : null;
        })
      );
    };
  }
}
