import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxComputationCompleteComponent } from './tax-computation-complete.component';

describe('TaxComputationCompleteComponent', () => {
  let component: TaxComputationCompleteComponent;
  let fixture: ComponentFixture<TaxComputationCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxComputationCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxComputationCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
