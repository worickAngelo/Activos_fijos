import { TestBed } from '@angular/core/testing';

import { TipoActivoService } from './tipo-activo.service';

describe('TipoActivoService', () => {
  let service: TipoActivoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoActivoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
