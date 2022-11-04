import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCalculoDepreciacionComponent } from './view-calculo-depreciacion.component';

describe('ViewCalculoDepreciacionComponent', () => {
  let component: ViewCalculoDepreciacionComponent;
  let fixture: ComponentFixture<ViewCalculoDepreciacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCalculoDepreciacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCalculoDepreciacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
