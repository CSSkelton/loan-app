/**
 * title: interest-paid.component.ts
 * date created : 05.19.2024
 * author: Cody Skelton
 * Code sourced from WEB 425 capstone assignment requirements
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-interest-paid',
  templateUrl: './interest-paid.component.html',
  styleUrls: ['./interest-paid.component.scss']
})
export class InterestPaidComponent implements OnInit {

  @Input() interestPaid: number;

  constructor() { }

  ngOnInit(): void {
  }

}
