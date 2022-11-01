import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxDetailCompleteComponent } from './tax-detail-complete.component';

describe('TaxDetailCompleteComponent', () => {
  let component: TaxDetailCompleteComponent;
  let fixture: ComponentFixture<TaxDetailCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxDetailCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxDetailCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
