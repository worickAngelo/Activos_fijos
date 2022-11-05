import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDepartamentosComponent } from './view-departamentos.component';

describe('ViewDepartamentosComponent', () => {
  let component: ViewDepartamentosComponent;
  let fixture: ComponentFixture<ViewDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDepartamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
