import { Frame } from '@nativescript/core';
import { NAVIGATION } from '../config/constants';

export function navigateToPage(pagePath: string, clearHistory = false) {
  Frame.topmost().navigate({
    moduleName: pagePath,
    clearHistory
  });
}

export function goBack() {
  Frame.topmost().goBack();
}