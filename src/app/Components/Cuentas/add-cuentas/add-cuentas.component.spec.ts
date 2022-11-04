import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCuentasComponent } from './add-cuentas.component';

describe('AddCuentasComponent', () => {
  let component: AddCuentasComponent;
  let fixture: ComponentFixture<AddCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCuentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
