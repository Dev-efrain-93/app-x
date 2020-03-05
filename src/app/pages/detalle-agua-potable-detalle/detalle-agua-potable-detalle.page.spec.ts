import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAguaPotableDetallePage } from './detalle-agua-potable-detalle.page';

describe('DetallePredialDetallePage', () => {
  let component: DetalleAguaPotableDetallePage;
  let fixture: ComponentFixture<DetalleAguaPotableDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAguaPotableDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAguaPotableDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
