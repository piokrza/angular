import { Routes } from '@angular/router';

import { AppPath } from '@ng-core/enum';

export const FormRoutes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('@ng-feature/forms')).FormsComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: AppPath.REACTIVE_FORMS },
      {
        path: AppPath.REACTIVE_FORMS,
        loadComponent: async () => (await import('@ng-feature/forms/page/reactive-forms')).ReactiveFormsComponent,
      },
    ],
  },
];
