import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-detail-complete',
  templateUrl: './tax-detail-complete.component.html',
  styleUrls: ['./tax-detail-complete.component.css']
})
export class TaxDetailCompleteComponent implements OnInit {
  @Input() dataList : any =[];

  taxFilingType : string = '';
  monthFiling : string ='';

  constructor() { }

  ngOnInit(): void {
    this.taxFilingType ='Ordinary Filing'
    this.monthFiling = (new Date().getMonth() + 1).toString();
    console.log("data list", this.dataList);

  }

}
