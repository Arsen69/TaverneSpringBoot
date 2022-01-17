import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-off',
  templateUrl: './log-off.component.html',
  styleUrls: ['./log-off.component.css'],
})
export class LogOffComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logoff() {
    localStorage.setItem('token', '');
    localStorage.setItem('login', '');
    localStorage.setItem('role', '');
    this.router.navigate(['/home']);
  }
}
