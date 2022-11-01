import { TestBed } from '@angular/core/testing';

import { TipoPersonasService } from './tipo-personas.service';

describe('TipoPersonasService', () => {
  let service: TipoPersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoPersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
