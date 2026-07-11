import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SharedCoreModule } from '@shared-core-module';
import { COMPONENT_ITEMS } from '@seed';
import { IComponentItem, INavigationItem } from '@interfaces';
import { Store } from '@app-store';
import { Conductor } from '../conductor/conductor';

@Component({
    selector: 'side-navigation',
    imports: [
        SharedCoreModule, Conductor,
    ],
    templateUrl: './side-navigation.html',
    styleUrl: './side-navigation.scss',
    host: { class: 'flex flex-column h-full overflow-hidden' },
})
export class SideNavigation {
    readonly _router = inject(Router);
    readonly store = inject(Store);
    readonly components = computed(() => {
        const activeName = this.store.activeName();
        const availableComponents = this.store.availableComponents();
        return Object.entries(COMPONENT_ITEMS.reduce<Record<string, IComponentItem[]>>((accumulator, item) => {
                if (availableComponents.includes(item.name)) {
                    accumulator[item.category] ??= [];
                    accumulator[item.category].push(item);
                }
                return accumulator;
            }, {})
        ).map(([category, items]) => ({ label: category, items: items.map(item => ({ ...item, isActive: item.name === activeName })) }))
    })
    readonly navigations = computed<INavigationItem[]>(() => {
        const activeName = this.store.activeName();
        const components = this.components();
        const someActiveComponent = components.some(({ items }) => items.some(({ isActive }) => isActive));
        const navigation = [
            { icon: 'code-branch', title: 'Branches', name: 'azure', route: 'azure', isActive: activeName === 'azure' },
            { icon: 'clone', title: 'Templates', name: 'templates', route: 'templates', isActive: activeName === 'templates' },
            { icon: 'images', title: 'Icons', name: 'icons', route: 'icons', isActive: activeName === 'icons' },
            {
                icon: 'book', title: 'Style Guide', name: 'style-guide',
                isActive: ['color-palette', 'border-radius', 'define-semantic', 'css-overrides',].includes(activeName) || someActiveComponent,
                styleClass: 'flex flex-column flex-1 min-h-0',
                items: [
                    { title: 'Color Palette', name: 'color-palette', isActive: false, route: 'style-guide/color-palette' },
                    { title: 'Border Radius', name: 'border-radius', isActive: false, route: 'style-guide/border-radius' },
                    { title: 'Define Semantic', name: 'define-semantic', isActive: false, route: 'style-guide/define-semantic' },
                    { title: 'Css Overrides', name: 'css-overrides', isActive: false, route: 'style-guide/css-overrides' },
                    {
                        title: 'Components', name: 'component-settings', isActive: someActiveComponent,
                        items: components
                    },
                ]
            },
        ];
        return navigation;
    });
    // readonly navigations = signal<INavigationItem[]>([
    //     { icon: 'code-branch', title: 'Branches', name: 'azure', route: 'azure', isActive: false },
    //     { icon: 'clone', title: 'Templates', name: 'templates', route: 'templates', isActive: false },
    //     { icon: 'images', title: 'Icons', name: 'icons', route: 'icons', isActive: false },
    //     {
    //         icon: 'book', title: 'Style Guide', name: 'style-guide', isActive: false,
    //         styleClass: 'flex flex-column flex-1 min-h-0',
    //         items: [
    //             { title: 'Color Palette', name: 'color-palette', isActive: false, route: 'style-guide/color-palette' },
    //             { title: 'Border Radius', name: 'border-radius', isActive: false, route: 'style-guide/border-radius' },
    //             { title: 'Define Semantic', name: 'define-semantic', isActive: false, route: 'style-guide/define-semantic' },
    //             { title: 'Css Overrides', name: 'css-overrides', isActive: false, route: 'style-guide/css-overrides' },
    //             {
    //                 title: 'Components', name: 'component-settings', isActive: false,
    //                 items: []
    //                 // items: Object.entries(COMPONENT_ITEMS.reduce<Record<string, IComponentItem[]>>((accumulator, item) => {
    //                 //         if (this.store.availableComponents().includes(item.name)) {
    //                 //             accumulator[item.category] ??= [];
    //                 //             accumulator[item.category].push(item);
    //                 //         }
    //                 //         return accumulator;
    //                 //     }, {})
    //                 // ).map(([category, items]) => ({ label: category, items: items.map(item => ({ ...item, isActive: false })) }))
    //             },
    //         ]
    //     },
    // ]);
    onItemClick(item: INavigationItem) {
        if (item.route) {
            this._router.navigateByUrl(item.route);
        } else {
            item.isActive = !item.isActive
        }
    }
}
