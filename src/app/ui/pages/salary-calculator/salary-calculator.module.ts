import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryCalculatorRoutingModule } from './salary-calculator-routing.module';
import { SalaryCalculatorComponent } from './salary-calculator.component';


@NgModule({
  declarations: [
    SalaryCalculatorComponent
  ],
  imports: [
    CommonModule,
    SalaryCalculatorRoutingModule
  ]
})
export class SalaryCalculatorModule { }
