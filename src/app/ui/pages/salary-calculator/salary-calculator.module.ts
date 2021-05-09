import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialSharedModule } from '../../shared/material-shared/material-shared.module';
import { SalaryCalculatorRoutingModule } from './salary-calculator-routing.module';
import { SalaryCalculatorComponent } from './salary-calculator.component';


@NgModule({
  declarations: [
    SalaryCalculatorComponent
  ],
  imports: [
    CommonModule,
    SalaryCalculatorRoutingModule,
    MaterialSharedModule
  ]
})
export class SalaryCalculatorModule { }
