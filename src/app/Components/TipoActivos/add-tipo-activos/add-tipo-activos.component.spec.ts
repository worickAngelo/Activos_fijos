import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoActivosComponent } from './add-tipo-activos.component';

describe('AddTipoActivosComponent', () => {
  let component: AddTipoActivosComponent;
  let fixture: ComponentFixture<AddTipoActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipoActivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTipoActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
