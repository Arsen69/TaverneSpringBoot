import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte-item',
  templateUrl: './carte-item.component.html',
  styleUrls: ['./carte-item.component.css'],
})
export class CarteItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  anim2: boolean = false;

  @HostListener('mouseenter')
  reverseAnim() {
    this.anim2 = true;
  }

  @HostListener('mouseleave')
  reverseAnim2() {
    this.anim2 = false;
  }
}
