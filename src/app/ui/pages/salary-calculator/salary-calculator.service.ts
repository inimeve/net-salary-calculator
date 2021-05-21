import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class SalaryCalculatorState {

  static STATE_KEY = 'SALARY_CALCULATOR_STATE';

  annualNetSalary: number;
  annualPayments: number;

  constructor(annualNetSalary: number, annualPayments: number) {
    this.annualNetSalary = annualNetSalary;
    this.annualPayments = annualPayments;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SalaryCalculatorService {

  private salaryCalculatorState: BehaviorSubject<SalaryCalculatorState> = new BehaviorSubject<SalaryCalculatorState> (new SalaryCalculatorState(0, 0));
  public salaryCalculatorState$: Observable<SalaryCalculatorState> = this.salaryCalculatorState.asObservable()
    .pipe(
      tap((newState: SalaryCalculatorState) => {
        this.saveSalaryCalculatorState(newState);
      })
    );

  constructor() {
    this.initializeSalaryCalculatorState();
  }

  initializeSalaryCalculatorState(): void {
    const localStorageValue: string | null = localStorage.getItem(SalaryCalculatorState.STATE_KEY);

    if (localStorageValue && JSON.parse(localStorageValue)) {
      this.salaryCalculatorState.next(JSON.parse(localStorageValue));
    }
  }

  updateSalaryCalculatorState(newState: SalaryCalculatorState): void {
    this.salaryCalculatorState.next(newState);
  }

  saveSalaryCalculatorState(state: SalaryCalculatorState): void {
    localStorage.setItem(SalaryCalculatorState.STATE_KEY, JSON.stringify(state));
  }

}
