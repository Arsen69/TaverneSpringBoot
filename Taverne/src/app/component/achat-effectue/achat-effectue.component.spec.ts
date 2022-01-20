import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatEffectueComponent } from './achat-effectue.component';

describe('AchatEffectueComponent', () => {
  let component: AchatEffectueComponent;
  let fixture: ComponentFixture<AchatEffectueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchatEffectueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatEffectueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
