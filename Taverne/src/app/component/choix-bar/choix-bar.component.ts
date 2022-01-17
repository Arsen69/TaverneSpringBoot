import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choix-bar',
  templateUrl: './choix-bar.component.html',
  styleUrls: ['./choix-bar.component.css'],
})
export class ChoixBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  tokkenBar1() {
    localStorage.removeItem('idBar');
    localStorage.setItem('idBar', '1');
    window.location.reload();
  }

  tokkenBar2() {
    localStorage.removeItem('idBar');
    localStorage.setItem('idBar', '2');
    window.location.reload();
  }
}
