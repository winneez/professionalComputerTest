import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-submit-tax-filing',
  templateUrl: './submit-tax-filing.component.html',
  styleUrls: ['./submit-tax-filing.component.css'],
})
export class SubmitTaxFilingComponent implements OnInit {
  isAdditionalType: boolean = false;
  isConfirm: boolean = false;
  page: string = '';
  activeIndex: number = 0

  filingType : string = '';
  month: string = '';
  year: string = '';
  saleAmount: number = 0;
  taxAmount: number = 0;
  surcharge: number = 0;
  penalty: number = 200;
  totalAmount: number = 200;

  isSaleNull: boolean = false ;
  isTaxNull: boolean = false ;
  isInvalid: boolean = true;

  constructor() {}

  items: MenuItem[] = [];

  ngOnInit() {
    this.page = '1';
    this.isAdditionalType = false;
    this.items = [
      { label: 'Input Detail', },
      { label: 'Rating & Confirm' },
    ];
  }

  getTypeOfFiling(filingType: string) {
    this.filingType = filingType;
    if (filingType === '1') {
      this.isAdditionalType = true;
    } else {
      this.isAdditionalType = false;
    }
  }

  getFilingMonth(filingMonth: any){
    console.log("month select: ",filingMonth);
  }

  getFilingYear(filingYear: any){
    console.log("year select: ",filingYear);
  }

  getSaleAmount(saleAmount: any){
    this.saleAmount = saleAmount;
    if(this.saleAmount ==0){
      this.isSaleNull = true;
    }
    else{
      this.isSaleNull = false;
    }
  }

  getTaxAmount(TaxAmount: any){
    var totalOfVat = this.saleAmount * 0.07;
    this.taxAmount = TaxAmount;
    var taxTotalLength = Math.abs(this.taxAmount - totalOfVat)
    if(this.taxAmount ==0){
      this.isTaxNull = true;
    }
    if(this.taxAmount !=0){
      this.isTaxNull = false;
    }
    if (
      taxTotalLength > 20
    ) {
      this.isInvalid = true;
      this.isConfirm = false;
    } if(taxTotalLength < 20) {
      this.isInvalid = false;
    }
  }

  nextPage() {
    if(this.saleAmount === 0){
      this.isSaleNull = true;
      this.isConfirm = false;
    }
    if(this.taxAmount ===0){
      this.isTaxNull = true;
      this.isConfirm = false;
    }
    if(this.taxAmount !=0){
      this.isSaleNull = false;
    }
    if(this.saleAmount !=0){
      this.isSaleNull = false;
    }
    if(this.taxAmount !=0 && this.saleAmount != 0 && this.isInvalid === false){
      this.isConfirm = true;
    }
    console.log(this.isInvalid);

  }

  previousPage() {
    this.isConfirm = false
  }
  confirmBtn(){

  }


}
