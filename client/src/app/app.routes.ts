import { Routes } from '@angular/router';
import { navigationResolver } from '@helpers/initializer.helper';

export const routes: Routes = [
    {
        path: 'azure',
        loadComponent: () => import('./features/azure/azure'),
        title: 'Aux TCN - Azure DevOps',
        data: { state: 'azure', header: 'Azure DevOps' },
        resolve: [navigationResolver],
    },
    {
        path: 'templates',
        loadComponent: () => import('./features/templates/templates'),
        title: 'Aux TCN - Templates',
        data: { state: 'templates', header: 'Templates' },
        resolve: [navigationResolver],
    },
    {
        path: 'icons',
        loadComponent: () => import('./features/icons/icons'),
        title: 'Aux TCN - Icons',
        data: { state: 'icons', header: 'Icons' },
        resolve: [navigationResolver],
    },
    {
        path: 'style-guide',
        loadChildren: () => import('./features/style-guide/style-guide.routes').then(r => r.routes),
    },
    { path: '', pathMatch: 'full', redirectTo: 'style-guide/color-palette' },
];
