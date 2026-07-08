import { Routes } from '@angular/router';
import { navigationResolver } from '@helpers/initializer.helper';

export const routes: Routes = [
    {
        path: 'color-palette',
        loadComponent: () => import('./sections/color-palette/color-palette'),
        title: 'Aux TCN - Color Palette',
        data: { state: 'color-palette', header: 'Color Palette', parent: 'style-guide' },
        resolve: [navigationResolver],
    },
    {
        path: 'border-radius',
        loadComponent: () => import('./sections/border-radius/border-radius'),
        title: 'Aux TCN - Border Radius',
        data: { state: 'border-radius', header: 'Border Radius', parent: 'style-guide' },
        resolve: [navigationResolver],
    },
    {
        path: 'define-semantic',
        loadComponent: () => import('./sections/semantic/semantic'),
        title: 'Aux TCN - Define Semantic',
        data: { state: 'define-semantic', header: 'Define Semantic', parent: 'style-guide' },
        resolve: [navigationResolver],
    },
    {
        path: 'css-overrides',
        loadComponent: () => import('./sections/css-overrides/css-overrides'),
        title: 'Aux TCN - Css Overrides',
        data: { state: 'css-overrides', header: 'Css Overrides', parent: 'css-overrides' },
        resolve: [navigationResolver],
    },
    {
        path: 'component-settings/:name',
        loadComponent: () => import('./sections/ui-component/ui-component'),
        title: 'Aux TCN - Component Settings Page',
        data: { state: 'component-settings', header: 'COMPONENT_SEARCH', parent: 'style-guide' },
        resolve: [navigationResolver],
        canDeactivate: [],
    },
    // { path: '', pathMatch: 'full', redirectTo: 'azure' },
];
