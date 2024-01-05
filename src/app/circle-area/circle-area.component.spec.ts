import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleAreaComponent } from './circle-area.component';

describe('CircleAreaComponent', () => {
  let component: CircleAreaComponent;
  let fixture: ComponentFixture<CircleAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircleAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('CircleAreaFunction', () => {
  let component: CircleAreaComponent;
  let fixture: ComponentFixture<CircleAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CircleAreaComponent],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial values for radio and areaCalculada', () => {
    expect(component.radio).toBe(0);
    expect(component.areaCalculada).toBe(0);
  });

  it('should calculate area for positive radio', () => {
    component.radio = 5;
    component.calcularArea();
    expect(component.areaCalculada).toBeCloseTo(78.54, 2);
  });

  it('should calculate area for zero radio', () => {
    component.radio = 0;
    component.calcularArea();
    expect(component.areaCalculada).toBe(0);
  });

  it('should calculate area for negative radio', () => {
    component.radio = -5;
    component.calcularArea();
    expect(component.areaCalculada).toBe(78.54); // Math.pow(-5, 2) = 25, but area should be positive
  });

  it('should calculate area for decimal radio', () => {
    component.radio = 2.5;
    component.calcularArea();
    expect(component.areaCalculada).toBeCloseTo(19.63, 2);
  });


  it('should not calculate area for NaN radio', () => {
    component.radio = NaN;
    component.calcularArea();
    expect(component.areaCalculada).toBe(0);
  });

});