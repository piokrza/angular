import { Routes } from '@angular/router';

export const FormRoutes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('@ng-feature/forms/page/reactive-forms')).ReactiveFormsComponent,
  },
];
