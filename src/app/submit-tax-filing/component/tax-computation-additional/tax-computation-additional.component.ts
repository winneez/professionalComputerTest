import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tax-computation-additional',
  templateUrl: './tax-computation-additional.component.html',
  styleUrls: ['./tax-computation-additional.component.css'],
})
export class TaxComputationAdditionalComponent implements OnInit {
  @Output() sendSaleAmount = new EventEmitter<number>();
  @Output() sendTaxAmount = new EventEmitter<number>();
  @Input() isTaxNull = false;
  @Input() isSaleNull = false;

  surcharge: number = 0;
  taxAmount: number = 0;
  totalOfVat: number = 0;
  invalidTaxAmount: string = '';
  isInvalid: boolean = false;

  totalSurCharge: number = 0;
  penalty: number = 0;
  totalAmount: number = 0;
  saleAmount: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.penalty = 200;
  }

  surchargeChange() {
    this.invalidTaxAmount = '';
    this.isInvalid = false;
    this.totalOfVat = this.saleAmount * 0.07;
    this.surcharge = this.totalOfVat * 0.1;
    this.taxAmount = this.totalOfVat;
    this.totalAmount = this.taxAmount + this.surcharge + this.penalty;
    console.log('surcharge: ', this.surcharge);
    this.sendSaleAmount.emit(this.saleAmount);
    this.sendTaxAmount.emit(this.taxAmount);
  }

  taxAmountChange() {
    this.invalidTaxAmount = '';
    this.isInvalid = false;
    this.surcharge = this.taxAmount * 0.1;
    this.totalAmount = this.taxAmount + this.surcharge + this.penalty;

    var taxTotalLength = Math.abs(this.taxAmount - this.totalOfVat);
    if (taxTotalLength > 20) {
      this.invalidTaxAmount = 'Invalid Tax!!';
      this.isInvalid = true;
      this.sendSaleAmount.emit(this.saleAmount);
      this.sendTaxAmount.emit(this.taxAmount);
    } else {
      this.invalidTaxAmount = '';
      this.isInvalid = false;
      this.sendSaleAmount.emit(this.saleAmount);
      this.sendTaxAmount.emit(this.taxAmount);
    }
  }
}
