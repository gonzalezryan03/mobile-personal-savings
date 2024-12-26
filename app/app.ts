import { Application } from '@nativescript/core';

// Register pages
const context = require.context('./', true, /\.(ts|js)$/);
context.keys().forEach(key => context(key));

Application.run({ moduleName: 'app-root' });