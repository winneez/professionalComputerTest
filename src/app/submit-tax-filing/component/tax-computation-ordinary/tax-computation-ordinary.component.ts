import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tax-computation-ordinary',
  templateUrl: './tax-computation-ordinary.component.html',
  styleUrls: ['./tax-computation-ordinary.component.css'],
})
export class TaxComputationOrdinaryComponent implements OnInit {
  @Output() sendSaleAmount = new EventEmitter<number>();
  @Output() sendTaxAmount = new EventEmitter<number>();
  @Input() isTaxNull = false;
  @Input() isSaleNull = false;

  saleAmount: number = 0;
  taxAmount: number = 0;
  totalOfVat: number = 0;
  invalidTaxAmount: string = '';
  isInvalid: boolean = false;

  isNull: boolean = false;
  isNullText: string ='';

  constructor() {}

  ngOnInit(): void {}

  saleAmountChange() {
    this.invalidTaxAmount = '';
    this.isInvalid = false;
    this.totalOfVat = this.saleAmount * 0.07;
    this.taxAmount = this.totalOfVat;
    console.log('total of vat: ', this.totalOfVat);
    this.sendSaleAmount.emit(this.saleAmount);
    this.sendTaxAmount.emit(this.taxAmount);
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
      this.sendTaxAmount.emit(this.taxAmount);
    }

  }
}
