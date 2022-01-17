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
    console.log('Tu choisis le bar 1');
    console.log('avant  ' + localStorage.getItem('idBar'));
    localStorage.removeItem('idBar');
    localStorage.setItem('idBar', '1');
    console.log('après  ' + localStorage.getItem('idBar'));
  }

  tokkenBar2() {
    console.log('Tu choisis le bar 2');
    console.log('avant  ' + localStorage.getItem('idBar'));
    localStorage.removeItem('idBar');
    localStorage.setItem('idBar', '2');
    console.log('après  ' + localStorage.getItem('idBar'));
  }
}
