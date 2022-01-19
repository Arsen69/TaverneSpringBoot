import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoissonComponent } from './edit-boisson.component';

describe('EditBoissonComponent', () => {
  let component: EditBoissonComponent;
  let fixture: ComponentFixture<EditBoissonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditBoissonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBoissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
