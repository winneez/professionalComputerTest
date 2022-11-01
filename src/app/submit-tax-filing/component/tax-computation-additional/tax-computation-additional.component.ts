import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-computation-additional',
  templateUrl: './tax-computation-additional.component.html',
  styleUrls: ['./tax-computation-additional.component.css'],
})
export class TaxComputationAdditionalComponent implements OnInit {
  surcharge: number = 0;
  taxAmount: number = 0;
  totalOfVat: number = 0;
  invalidTaxAmount: string = '';
  isInvalid: boolean = false;

  totalSurCharge: number = 0;
  penalty: number =0;
  totalAmount: number =0;
  saleAmount:number =0;

  constructor() {}

  ngOnInit(): void {
    this.penalty = 200;
  }

  surchargeChange() {
    this.invalidTaxAmount = '';
    this.isInvalid = false;
    this.totalOfVat = this.saleAmount * 0.07;
    this.surcharge = this.taxAmount * 0.1;
    this.taxAmount = this.totalOfVat;
    this.totalAmount = this.taxAmount+this.surcharge+this.penalty
    console.log('total of vat: ', this.totalOfVat);
  }

  taxAmountChange() {
    this.invalidTaxAmount = '';
    this.isInvalid = false;
    this.surcharge = this.taxAmount * 0.1;
    this.totalAmount = this.taxAmount+this.surcharge+this.penalty
    console.log(
      'taxAmount: ',
      this.taxAmount,
      ' totalOfVat: ',
      this.totalOfVat,
      '====',
      this.taxAmount - this.totalOfVat
    );
    var taxTotalLength = Math.abs(this.taxAmount - this.totalOfVat);
    if (taxTotalLength > 20) {
      this.invalidTaxAmount = 'Invalid Tax!!';
      this.isInvalid = true;
    } else {
      this.invalidTaxAmount = '';
      this.isInvalid = false;
    }
  }
}
