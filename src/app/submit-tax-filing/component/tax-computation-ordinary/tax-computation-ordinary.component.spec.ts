import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxComputationOrdinaryComponent } from './tax-computation-ordinary.component';

describe('TaxComputationOrdinaryComponent', () => {
  let component: TaxComputationOrdinaryComponent;
  let fixture: ComponentFixture<TaxComputationOrdinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxComputationOrdinaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxComputationOrdinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
