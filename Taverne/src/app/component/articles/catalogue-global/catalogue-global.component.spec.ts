import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueGlobalComponent } from './catalogue-global.component';

describe('CatalogueGlobalComponent', () => {
  let component: CatalogueGlobalComponent;
  let fixture: ComponentFixture<CatalogueGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogueGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
