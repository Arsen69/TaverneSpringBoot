import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { debounceTime, map, Observable } from 'rxjs';

export class LoginUnique {
  /* checkPasDansListe(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.service.checkDatainList(controlvalue).pipe(
        debounceTime(1000),
        map((res: boolean) => {
          return res ? { checkDataInList: true } : null;
        })
      );
    };
  } */
}
