import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax-computation-ordinary',
  templateUrl: './tax-computation-ordinary.component.html',
  styleUrls: ['./tax-computation-ordinary.component.css'],
})
export class TaxComputationOrdinaryComponent implements OnInit {
  surcharge: Number = 0;
  taxAmount: Number = 0;

  constructor() {}

  ngOnInit(): void {}
}
