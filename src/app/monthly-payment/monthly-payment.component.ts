/**
 * title: monthly-payment.component.ts
 * date created : 05.19.2024
 * author: Cody Skelton
 * Code sourced from WEB 425 capstone assignment requirements
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.scss']
})
export class MonthlyPaymentComponent implements OnInit {

  @Input() monthlyPayment: number;

  constructor() { }

  ngOnInit(): void {
  }

}
