import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTableauComponent } from './stock-tableau.component';

describe('StockTableauComponent', () => {
  let component: StockTableauComponent;
  let fixture: ComponentFixture<StockTableauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTableauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
