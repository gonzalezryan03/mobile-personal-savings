import { EventData, NavigatedData, Page } from '@nativescript/core';
import { ProfileViewModel } from '../view-models/profile-view-model';
import { DEFAULT_VALUES } from '../shared/config/constants';

let viewModel: ProfileViewModel;

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    viewModel = new ProfileViewModel();
    page.bindingContext = viewModel;
}

export function saveProfile(args: EventData) {
    const name = viewModel.userProfile.name || DEFAULT_VALUES.NAME;
    const income = viewModel.userProfile.annualIncome || DEFAULT_VALUES.ANNUAL_INCOME;
    viewModel.saveProfile(name, income);
}