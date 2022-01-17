import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixBarComponent } from './choix-bar.component';

describe('ChoixBarComponent', () => {
  let component: ChoixBarComponent;
  let fixture: ComponentFixture<ChoixBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
