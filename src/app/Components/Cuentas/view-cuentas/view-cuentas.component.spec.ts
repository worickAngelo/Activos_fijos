import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCuentasComponent } from './view-cuentas.component';

describe('ViewCuentasComponent', () => {
  let component: ViewCuentasComponent;
  let fixture: ComponentFixture<ViewCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCuentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
