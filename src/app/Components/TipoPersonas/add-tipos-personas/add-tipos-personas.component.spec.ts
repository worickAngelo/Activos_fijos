import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTiposPersonasComponent } from './add-tipos-personas.component';

describe('AddTiposPersonasComponent', () => {
  let component: AddTiposPersonasComponent;
  let fixture: ComponentFixture<AddTiposPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTiposPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTiposPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
