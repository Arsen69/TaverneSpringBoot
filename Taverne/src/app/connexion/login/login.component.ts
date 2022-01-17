import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/Users/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error: boolean = false;

  constructor(private auth: AuthenticationService, private router: Router) {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  login() {
    let login = this.form.controls['login'].value;
    let password = this.form.controls['password'].value;
    this.auth.login(login, password).subscribe({
      next: (v) => {
        localStorage.setItem('token', btoa(login + ':' + password));
        localStorage.setItem('role', v);
        console.log(localStorage.getItem('role'));
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

  logOff() {
    localStorage.clear();
  }

  display() {
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('role'));
    console.log(this.error);
  }
}
