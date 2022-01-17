import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('StockTableauComponent', () => {
  let component: StockTableauComponentent;
  let fixture: ComponentFixture<StockTableauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockTableauComponent],
    }).compileComponents();
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
