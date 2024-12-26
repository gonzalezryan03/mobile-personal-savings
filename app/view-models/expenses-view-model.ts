import { Observable, ObservableArray } from '@nativescript/core';
import { Expense } from '../models/expense.model';

export class ExpensesViewModel extends Observable {
  private _expenses: ObservableArray<Expense>;
  private _totalExpenses: number;

  constructor() {
    super();
    this._expenses = new ObservableArray<Expense>();
    this._totalExpenses = 0;
  }

  get expenses(): ObservableArray<Expense> {
    return this._expenses;
  }

  get totalExpenses(): number {
    return this._totalExpenses;
  }

  addExpense(amount: number, category: string, description: string) {
    const expense = new Expense();
    expense.amount = amount;
    expense.category = category;
    expense.description = description;
    
    this._expenses.push(expense);
    this._totalExpenses += amount;
    this.notifyPropertyChange('totalExpenses', this._totalExpenses);
  }

  removeExpense(expense: Expense) {
    const index = this._expenses.indexOf(expense);
    if (index > -1) {
      this._expenses.splice(index, 1);
      this._totalExpenses -= expense.amount;
      this.notifyPropertyChange('totalExpenses', this._totalExpenses);
    }
  }
}