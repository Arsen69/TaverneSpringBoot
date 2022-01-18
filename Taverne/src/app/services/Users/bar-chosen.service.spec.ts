import { TestBed } from '@angular/core/testing';

import { BarChosenService } from './bar-chosen.service';

describe('BarChosenService', () => {
  let service: BarChosenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarChosenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
