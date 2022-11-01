import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import monthList from '../../assets/monthList.json';

@Component({
  selector: 'app-tax-detail',
  templateUrl: './tax-detail.component.html',
  styleUrls: ['./tax-detail.component.css'],
})
export class TaxDetailComponent implements OnInit {
  @Output() typeOfFiling = new EventEmitter<string>();

  selectFiling: string = '';
  isAdditionalType: boolean = false;
  monthDataList: any = [];
  yearList: any = [];
  selectedMonth: string = '';
  selectedYear: string = '';
  selectedType: string ='';
  currentYear = new Date().getFullYear();
  currentMonth = (new Date().getMonth() + 1).toString();
  typeTaxMonth : any =[{type: "On-Time", code: "1"}]

  constructor() {}

  ngOnInit(): void {
    this.selectedMonth = this.currentMonth;
    this.selectedYear = this.currentYear.toString();
    this.selectFiling = '0';
    this.isAdditionalType = false;
    this.typeOfFiling.emit(this.selectFiling);

    let year = this.currentYear;

    for (let i = 0; i <= this.currentYear - 2020; i++) {
      this.yearList.push({ year: year });
      year -= 1;
    }
    if (this.currentYear=== Number(this.selectedYear)) {
      for (let i = 0; i < Number(this.currentMonth); i++) {
        this.monthDataList.push(monthList[i]);
      }
    } else {
      this.monthDataList = monthList;
    }
  }

  onClickRadio() {
    if (this.selectFiling === '1') {
      this.isAdditionalType = true;
    } else {
      this.isAdditionalType = false;
    }
    this.typeOfFiling.emit(this.selectFiling);
  }

  onYearChange(){
    this.monthDataList =[]
    if (this.currentYear=== Number(this.selectedYear)) {

      for (let i = 0; i < Number(this.currentMonth); i++) {
        this.monthDataList.push(monthList[i]);
      }
    } else {
      this.monthDataList = monthList;
    }
  }
}
