import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTiposPersonasComponent } from './view-tipos-personas.component';

describe('ViewTiposPersonasComponent', () => {
  let component: ViewTiposPersonasComponent;
  let fixture: ComponentFixture<ViewTiposPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTiposPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTiposPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
