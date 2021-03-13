import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDireccionesComponent } from './ver-direcciones.component';

describe('VerDireccionesComponent', () => {
  let component: VerDireccionesComponent;
  let fixture: ComponentFixture<VerDireccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerDireccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDireccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
