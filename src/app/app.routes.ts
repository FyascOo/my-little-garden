import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./feat/calendrier/calendrier.component').then(
        (c) => c.CalendrierComponent
      ),
  },
];
