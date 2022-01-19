import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bar } from 'src/app/model/inventaire/bar';
import { BarService } from 'src/app/services/bar.service';

@Component({
  selector: 'app-choix-bar',
  templateUrl: './choix-bar.component.html',
  styleUrls: ['./choix-bar.component.css'],
})
export class ChoixBarComponent implements OnInit {
  constructor(private barService: BarService) {}

  bars: Observable<Bar[]> | null = null;

  ngOnInit(): void {
    this.bars = this.barService.getAll();
  }
}
