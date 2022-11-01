import { taxData } from './submit-tax-filing.model';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import monthList from '../../app/submit-tax-filing/assets/monthList.json';

@Component({
  selector: 'app-submit-tax-filing',
  templateUrl: './submit-tax-filing.component.html',
  styleUrls: ['./submit-tax-filing.component.css'],
})
export class SubmitTaxFilingComponent implements OnInit {
  isAdditionalType: boolean = false;
  isConfirm: boolean = false;
  page: string = '';
  activeIndex: number = 0;

  dataList: any = [];

  montSet: any = [];

  filingType: string = '';
  month: string = '';
  year: string = '';
  saleAmount: number = 0;
  taxAmount: number = 0;
  surcharge: number = 0;
  penalty: number = 200;
  totalAmount: number = 0;

  isSaleNull: boolean = false;
  isTaxNull: boolean = false;
  isInvalid: boolean = true;

  confirmModalDisplay:boolean = false;

  constructor() {}

  items: MenuItem[] = [];

  ngOnInit() {
    this.montSet = monthList;
    this.page = '1';
    this.isAdditionalType = false;
    this.items = [{ label: 'Input Detail' }, { label: 'Rating & Confirm' }];
  }

  getTypeOfFiling(filingType: string) {
    if (filingType === '1') {
      this.isAdditionalType = true;
      this.filingType = 'Additional Filing';
    } else {
      this.isAdditionalType = false;
      this.filingType = 'Ordinary Filing';
    }
  }

  getFilingMonth(filingMonth: any) {
    for (let i = 0; i < this.montSet.length; i++) {
      console.log(
        'monthset: ',
        this.montSet[i].monthNumber,
        'get: ',
        filingMonth
      );

      if (this.montSet[i].monthNumber.toString() === filingMonth.toString()) {
        this.month = this.montSet[i].name;
        console.log('month name: ', this.month);
      }
    }
  }

  getFilingYear(filingYear: any) {
    this.year = filingYear;
  }

  getSaleAmount(saleAmount: any) {
    this.saleAmount = saleAmount;
    if (this.saleAmount == 0) {
      this.isSaleNull = true;
    } else {
      this.isSaleNull = false;
    }
  }

  getTaxAmount(TaxAmount: any) {
    var totalOfVat = this.saleAmount * 0.07;
    this.taxAmount = TaxAmount;
    var taxTotalLength = Math.abs(this.taxAmount - totalOfVat);
    console.log(
      'total vat: ',
      totalOfVat,
      'tax: ',
      this.taxAmount,
      ' tax totl : ',
      taxTotalLength
    );

    if (this.taxAmount == 0) {
      this.isTaxNull = true;
    }
    if (this.taxAmount != 0) {
      this.isTaxNull = false;
    }
    if (taxTotalLength > 20) {
      console.log('d1');

      this.isInvalid = true;
      this.isConfirm = false;
    }
    if (taxTotalLength < 20) {
      console.log('d22');

      this.isInvalid = false;
    }
  }

  nextPage() {
    this.surcharge = this.taxAmount * 0.1;
    this.totalAmount = this.taxAmount + this.surcharge + this.penalty;
    if (this.saleAmount === 0) {
      this.isSaleNull = true;
      this.isConfirm = false;
    }
    if (this.taxAmount === 0) {
      this.isTaxNull = true;
      this.isConfirm = false;
    }
    if (this.taxAmount != 0) {
      this.isSaleNull = false;
    }
    if (this.saleAmount != 0) {
      this.isSaleNull = false;
    }
    if (
      this.taxAmount != 0 &&
      this.saleAmount != 0 &&
      this.isInvalid === false
    ) {
      this.isConfirm = true;
      const taxData: taxData = {
        filingType: this.filingType,
        month: this.month,
        year: this.year,
        saleAmount: Math.round(this.saleAmount*100) / 100,
        taxAmount: Math.round(this.taxAmount*100) / 100,
        surcharge: Math.round(this.surcharge*100) / 100,
        penalty: 200,
        totalAmount: Math.round(this.totalAmount*100) / 100,
      };
      this.dataList = taxData;
    }
  }

  previousPage() {
    this.isConfirm = false;
  }
  confirmBtn() {
    this.confirmModalDisplay = true;
  }

  closeConfirm(){
    this.filingType= '';
    this.month = '';
    this.year = '';
    this.saleAmount = 0;
    this.taxAmount = 0;
    this.surcharge = 0;
    this.penalty = 200;
    this.totalAmount = 0;
    this.confirmModalDisplay = false;
    this.isConfirm = false;
  }
}
