import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAccueilComponent } from './btn-accueil.component';

describe('BtnAccueilComponent', () => {
  let component: BtnAccueilComponent;
  let fixture: ComponentFixture<BtnAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
