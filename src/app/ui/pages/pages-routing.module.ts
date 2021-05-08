import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'calculator', loadChildren: () => import('./salary-calculator/salary-calculator.module').then(m => m.SalaryCalculatorModule)},
      {path: '', pathMatch: 'full', redirectTo: 'calculator'},
      {path: '**', redirectTo: 'calculator'}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
