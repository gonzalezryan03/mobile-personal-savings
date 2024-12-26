import { EventData, NavigatedData, Page } from '@nativescript/core';
import { ExpensesViewModel } from '../view-models/expenses-view-model';
import { goBack } from '../shared/utils/navigation';

let viewModel: ExpensesViewModel;

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    viewModel = new ExpensesViewModel();
    page.bindingContext = viewModel;
}

export function saveExpense(args: EventData) {
    const amount = viewModel.expenses[0]?.amount || 0;
    const category = viewModel.expenses[0]?.category || '';
    const description = viewModel.expenses[0]?.description || '';
    
    viewModel.addExpense(amount, category, description);
    goBack();
}