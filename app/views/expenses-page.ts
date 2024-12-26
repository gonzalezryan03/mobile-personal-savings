import { NavigatedData, Page } from '@nativescript/core';
import { ExpensesViewModel } from '../view-models/expenses-view-model';
import { navigateToPage } from '../shared/utils/navigation';
import { NAVIGATION } from '../shared/config/constants';

let viewModel: ExpensesViewModel;

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    viewModel = new ExpensesViewModel();
    page.bindingContext = viewModel;
}

export function showAddExpense() {
    navigateToPage(NAVIGATION.ADD_EXPENSE);
}