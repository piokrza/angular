import { Routes } from '@angular/router';

import { AppPath } from '@ng-core/enum';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('@ng-ui/layout')).Layout,
    children: [
      { path: '', redirectTo: AppPath.FORMS, pathMatch: 'full' },
      {
        path: AppPath.FORMS,
        loadComponent: async () => (await import('@ng-feature/forms')).Forms,
      },
    ],
  },
];
