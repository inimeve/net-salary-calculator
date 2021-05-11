import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { MaterialSharedModule } from '../shared/material-shared/material-shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PagesComponent,
    SalaryCalculatorComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    MaterialSharedModule
  ]
})
export class PagesModule { }
