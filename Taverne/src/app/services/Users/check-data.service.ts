import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { CheckService } from './check.service';

@Injectable({
  providedIn: 'root',
})
export class CheckDataService implements AsyncValidator {
  constructor(private checkService: CheckService, private http: HttpClient) {
    console.log(this.checkService);
  }

  checkDataInList(data: string): Observable<any> {
    console.log(data);
    return this.http.get(
      'http://localhost:8080/Taverne/api/compte/bool/' + data
    );
  }

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.checkDataInList(ctrl.value).pipe(
      map((res: boolean) => {
        console.log(res);
        return res ? { erreur: true } : null;
      })
    );
  }
}
