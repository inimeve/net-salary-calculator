import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.scss']
})
export class SalaryCalculatorComponent implements OnInit {

  anualNetSalary: FormControl = new FormControl('');

  anualPayments: FormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
