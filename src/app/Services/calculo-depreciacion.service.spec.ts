import { TestBed } from '@angular/core/testing';

import { CalculoDepreciacionService } from './calculo-depreciacion.service';

describe('CalculoDepreciacionService', () => {
  let service: CalculoDepreciacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculoDepreciacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
