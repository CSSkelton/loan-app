/**
 * title: app-routing.module.ts
 * author: Cody Skelton
 * date modified: 05.18.2024
 * Code sourced from WEB 425 capstone assignment requirements
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';

const routes: Routes = [
  {
    path: '',
    component: LoanCalculatorComponent
  },
  {
    path: 'loan-calculator',
    component: LoanCalculatorComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
