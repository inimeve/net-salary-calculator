import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryCalculatorComponent } from './salary-calculator.component';

const routes: Routes = [
  {path: '', component: SalaryCalculatorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaryCalculatorRoutingModule { }
