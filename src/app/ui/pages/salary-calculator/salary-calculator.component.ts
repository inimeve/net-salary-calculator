import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SalaryCalculatorService, SalaryCalculatorState } from './salary-calculator.service';
import { debounceTime, first } from 'rxjs/operators';

interface SalaryCalculatorFormModel {
  annualNetSalary: number;
  annualPayments: number;
}

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.scss']
})
export class SalaryCalculatorComponent implements OnInit {

  salaryCalculatorFormGroup: FormGroup = new FormGroup({
    annualNetSalary: new FormControl(),
    annualPayments: new FormControl(),
  });

  constructor(public salaryCalculatorService: SalaryCalculatorService) {
    this.initializeFormFromState();
    this.salaryCalculatorFormGroup.valueChanges
      .pipe(debounceTime(500))
      .subscribe((newValue: SalaryCalculatorFormModel) => {
        const newSalaryCalculatorState: SalaryCalculatorState = new SalaryCalculatorState(
          newValue.annualNetSalary,
          newValue.annualPayments
        );
        this.salaryCalculatorService.updateSalaryCalculatorState(newSalaryCalculatorState);
      });
  }

  ngOnInit(): void {}

  private initializeFormFromState(): void {
    this.salaryCalculatorService.salaryCalculatorState$.pipe(first()).subscribe((initialState: SalaryCalculatorState) => {
      this.salaryCalculatorFormGroup.setValue(initialState as SalaryCalculatorFormModel);
    });
  }

}
