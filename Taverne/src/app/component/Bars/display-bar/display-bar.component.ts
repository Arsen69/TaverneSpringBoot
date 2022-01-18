import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bar } from 'src/app/model/inventaire/bar';
import { BarService } from 'src/app/services/bar.service';

@Component({
  selector: 'app-display-bar, [app-display-bar]',
  templateUrl: './display-bar.component.html',
  styleUrls: ['./display-bar.component.css'],
})
export class DisplayBarComponent implements OnInit {
  constructor(private barService: BarService, private router: Router) {}

  @Input()
  bar: Bar = new Bar();

  ngOnInit(): void {}

  @HostListener('click')
  setBar() {
    console.log(String(this.bar.idBar));
    console.log(this.bar.idBar);
    localStorage.setItem('idBar', String(this.bar.idBar));
    this.router.navigate(['/carte']);
  }
}
