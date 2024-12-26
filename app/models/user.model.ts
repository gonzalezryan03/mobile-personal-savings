import { Observable } from '@nativescript/core';

export class UserProfile extends Observable {
  private _annualIncome: number;
  private _monthlyBudget: number;
  private _name: string;

  constructor() {
    super();
    this._annualIncome = 0;
    this._monthlyBudget = 0;
    this._name = '';
  }

  get annualIncome(): number {
    return this._annualIncome;
  }

  set annualIncome(value: number) {
    if (this._annualIncome !== value) {
      this._annualIncome = value;
      this._monthlyBudget = value / 12;
      this.notifyPropertyChange('annualIncome', value);
      this.notifyPropertyChange('monthlyBudget', this._monthlyBudget);
    }
  }

  get monthlyBudget(): number {
    return this._monthlyBudget;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (this._name !== value) {
      this._name = value;
      this.notifyPropertyChange('name', value);
    }
  }
}