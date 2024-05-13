/**
 * title: app.component.ts
 * author: Cody Skelton
 * date created: 05.12.2024
 * Code sourced from WEB 425 capstone assignment requirements
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment = 'Loan Calculator App';
  title = 'loan-app'
}
