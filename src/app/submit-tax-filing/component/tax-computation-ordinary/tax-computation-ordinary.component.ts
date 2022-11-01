import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-computation-ordinary',
  templateUrl: './tax-computation-ordinary.component.html',
  styleUrls: ['./tax-computation-ordinary.component.css'],
})
export class TaxComputationOrdinaryComponent implements OnInit {
  surcharge: number = 0;
  taxAmount: number = 0;
  totalOfVat: number = 0;
  invalidTaxAmount: string = '';
  isInvalid: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  surchargeChange() {
    this.invalidTaxAmount = '';
    this.isInvalid = false;
    this.totalOfVat = this.surcharge * 0.07;
    this.taxAmount = this.totalOfVat;
    console.log('total of vat: ', this.totalOfVat);
  }

  taxAmountChange() {
    this.invalidTaxAmount = '';
    this.isInvalid = false;
    console.log("taxAmount: ",this.taxAmount," totalOfVat: ",this.totalOfVat,"====",this.taxAmount-this.totalOfVat);
    var taxTotalLength = Math.abs(this.taxAmount - this.totalOfVat)
    if (
      taxTotalLength > 20
    ) {
      this.invalidTaxAmount = 'Invalid Tax!!';
      this.isInvalid = true;
    } else {
      this.invalidTaxAmount = '';
      this.isInvalid = false;
    }
  }
}
