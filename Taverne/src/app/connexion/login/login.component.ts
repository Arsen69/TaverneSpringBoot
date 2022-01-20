import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/Users/authentication.service';
import { CheckService } from 'src/app/services/Users/check.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: boolean = false;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private check: CheckService
  ) {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  login() {
    let login = this.form.controls['login'].value;
    let password = this.form.controls['password'].value;
    this.check.check(login).subscribe((res: boolean) => {
      if (res) {
        this.auth.login(login, password).subscribe({
          next: (v) => {
            localStorage.setItem('token', btoa(login + ':' + password));
            localStorage.setItem('role', v);
            localStorage.setItem('login', login);
            this.router.navigate(['home']);
          },
          error: (e) => {
            console.log(e);
          },
          complete: () => {
            console.info('complete');
          },
        });
      }
    });
  }
}
