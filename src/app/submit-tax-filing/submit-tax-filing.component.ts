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
    if (filingType === '1') {
      this.isAdditionalType = true;
    } else {
      this.isAdditionalType = false;
    }
  }

  nextPage() {
    this.isConfirm = true
  }

  previousPage() {
    this.isConfirm = false
  }
  confirmBtn(){

  }
}
