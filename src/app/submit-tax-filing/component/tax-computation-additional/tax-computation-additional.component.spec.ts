import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxComputationAdditionalComponent } from './tax-computation-additional.component';

describe('TaxComputationAdditionalComponent', () => {
  let component: TaxComputationAdditionalComponent;
  let fixture: ComponentFixture<TaxComputationAdditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxComputationAdditionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxComputationAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
