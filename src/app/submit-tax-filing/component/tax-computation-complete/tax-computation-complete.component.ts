import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-computation-complete',
  templateUrl: './tax-computation-complete.component.html',
  styleUrls: ['./tax-computation-complete.component.css']
})
export class TaxComputationCompleteComponent implements OnInit {
  @Input() dataList : any =[];

  constructor() { }

  ngOnInit(): void {
  }

}
