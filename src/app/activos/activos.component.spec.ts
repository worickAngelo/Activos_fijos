import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivosComponent } from './activos.component';

describe('ActivosComponent', () => {
  let component: ActivosComponent;
  let fixture: ComponentFixture<ActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
