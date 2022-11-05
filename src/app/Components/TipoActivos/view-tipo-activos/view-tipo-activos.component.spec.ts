import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTipoActivosComponent } from './view-tipo-activos.component';

describe('ViewTipoActivosComponent', () => {
  let component: ViewTipoActivosComponent;
  let fixture: ComponentFixture<ViewTipoActivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTipoActivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTipoActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
