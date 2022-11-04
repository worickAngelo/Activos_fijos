import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCalculoDepreciacionComponent } from './add-calculo-depreciacion.component';

describe('AddCalculoDepreciacionComponent', () => {
  let component: AddCalculoDepreciacionComponent;
  let fixture: ComponentFixture<AddCalculoDepreciacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCalculoDepreciacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCalculoDepreciacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
