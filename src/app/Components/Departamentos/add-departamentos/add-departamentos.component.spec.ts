import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartamentosComponent } from './add-departamentos.component';

describe('AddDepartamentosComponent', () => {
  let component: AddDepartamentosComponent;
  let fixture: ComponentFixture<AddDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDepartamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
