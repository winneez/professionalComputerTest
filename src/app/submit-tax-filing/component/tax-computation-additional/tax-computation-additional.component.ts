import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-computation-additional',
  templateUrl: './tax-computation-additional.component.html',
  styleUrls: ['./tax-computation-additional.component.css']
})
export class TaxComputationAdditionalComponent implements OnInit {
  surcharge: Number = 0;
  taxAmount: Number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
