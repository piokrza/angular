import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: async () => (await import('@ng/ui/layout')).Layout,
    children: [
      {
        path: '',
        loadComponent: async () => (await import('@ng/feature/project-list')).ProjectList,
      },
    ],
  },
];
