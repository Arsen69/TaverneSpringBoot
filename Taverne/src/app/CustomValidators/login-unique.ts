import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { debounceTime, map, Observable } from 'rxjs';
import { CheckDataService } from '../services/Users/check-data.service';

export class LoginUnique {
  constructor(private checkDataService: CheckDataService) {}

  checkPasDansListe(controlvalue: string): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkDataService.checkDataInList(controlvalue).pipe(
        debounceTime(1000),
        map((res: boolean) => {
          return res ? { checkDataInList: true } : null;
        })
      );
    };
  }
}
