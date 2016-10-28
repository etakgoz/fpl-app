import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveTableComponent }    from './live-table/live-table.component';

const appRoutes: Routes = [
  {
    path: 'live',
    component: LiveTableComponent
  },
  {
    path: '',
    redirectTo: '/live',
    pathMatch: 'full'
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
