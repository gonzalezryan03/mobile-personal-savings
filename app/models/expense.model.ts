import { Observable } from '@nativescript/core';

export class Expense extends Observable {
  private _id: string;
  private _amount: number;
  private _category: string;
  private _date: Date;
  private _description: string;

  constructor() {
    super();
    this._id = Math.random().toString(36).substr(2, 9);
    this._amount = 0;
    this._category = '';
    this._date = new Date();
    this._description = '';
  }

  get id(): string {
    return this._id;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    if (this._amount !== value) {
      this._amount = value;
      this.notifyPropertyChange('amount', value);
    }
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    if (this._category !== value) {
      this._category = value;
      this.notifyPropertyChange('category', value);
    }
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    if (this._date !== value) {
      this._date = value;
      this.notifyPropertyChange('date', value);
    }
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    if (this._description !== value) {
      this._description = value;
      this.notifyPropertyChange('description', value);
    }
  }
}