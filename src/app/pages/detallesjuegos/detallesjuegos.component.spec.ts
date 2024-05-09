import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesjuegosComponent } from './detallesjuegos.component';

describe('DetallesjuegosComponent', () => {
  let component: DetallesjuegosComponent;
  let fixture: ComponentFixture<DetallesjuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesjuegosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesjuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
