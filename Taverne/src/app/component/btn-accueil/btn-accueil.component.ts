import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-accueil',
  templateUrl: './btn-accueil.component.html',
  styleUrls: ['./btn-accueil.component.css'],
})
export class BtnAccueilComponent implements OnInit {
  constructor(private router: Router) {}

  scale: boolean = false;

  @Input('txt')
  txtToDisplay: String = '';

  @Input('path')
  whereDoWeGo: String = '';

  ngOnInit(): void {}

  getMeOut() {
    this.router.navigate([this.whereDoWeGo]);
  }

  @HostListener('mouseenter')
  reverseAnim() {
    this.scale = true;
  }

  @HostListener('mouseleave')
  reverseAnim2() {
    this.scale = false;
  }
}
