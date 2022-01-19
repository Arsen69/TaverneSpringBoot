import { BoissonService } from './../../services/boisson.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boisson } from 'src/app/model/inventaire/boisson';
import { Bar } from 'src/app/model/inventaire/bar';

@Component({
  selector: 'app-edit-boisson',
  templateUrl: './edit-boisson.component.html',
  styleUrls: ['./edit-boisson.component.css'],
})
export class EditBoissonComponent implements OnInit {
  boisson: Boisson = new Boisson();
  bar: Bar = new Bar();
  id: number = 0;
  idBar: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private boissonService: BoissonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (!!params['id']) {
        this.boissonService.getById(params['id']).subscribe((result) => {
          this.boisson = result;
        });
      }
    });
  }

  saveSoft() {
    console.log('entrée dans saveSoft');
    console.log('boisson.id:' + this.boisson.id);
    console.log('boisson.idbar:' + this.boisson.idBar);
    console.log('bar.idbar:' + this.bar.idBar);
    // if (!!this.boisson.id) {
    this.boissonService.updateSoft(this.boisson).subscribe((ok) => {
      this.router.navigate(['/carte2']);
      // });
      // } else {
      //   // this.boissonService.createSoft(this.boisson).subscribe((ok) => {
      //   //   this.router.navigate(['/carte2']);
    });
  }
}
