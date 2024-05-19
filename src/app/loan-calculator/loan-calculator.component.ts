/**
 * title: loan-calculator.component.ts
 * date created : 05.19.2024
 * author: Cody Skelton
 * Code sourced from WEB 425 capstone assignment requirements
 */

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.scss']
})
export class LoanCalculatorComponent implements OnInit {

  principle: number = 0;
  interestRate: number = 0;
  years: number = 0;
  monthlyPayment: number = 0;
  ratePerPeriod: number = 0;
  numberOfPayments: number = 0;
  interestPaid: number = 0;
  totalAmountPaid: number = 0;
  loanForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      principle: ['', Validators.required],
      interestRate: ['', Validators.required],
      years: ['', Validators.required]
    });
  }

  onSubmit() {
    const formValues = this.loanForm.value;
    // Input validation for negative inputs using Math.abs() method
    this.principle = Math.abs(parseInt(formValues.principle));
    this.interestRate = Math.abs(parseFloat(formValues.interestRate) / 100);
    this.years = Math.abs(parseInt(formValues.years));
    this.ratePerPeriod = this.interestRate / 12;
    this.numberOfPayments = this.years * 12;

    this.monthlyPayment = this.principle * (this.ratePerPeriod * Math.pow((this.ratePerPeriod + 1), this.numberOfPayments)) / (Math.pow((1 + this.ratePerPeriod), this.numberOfPayments) - 1);
    this.totalAmountPaid = this.monthlyPayment * this.numberOfPayments;
    this.interestPaid = this.totalAmountPaid - this.principle;
  }

  get form(){
    return this.loanForm.controls;
  }
}
