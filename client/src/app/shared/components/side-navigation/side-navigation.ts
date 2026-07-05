import { Component, OnInit, Injector, effect, inject, signal, untracked } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '@shared-module';
import { COMPONENT_ITEMS, IComponentItem } from '@seed';
import { INavigationItem } from '@interfaces';
import { Store } from '@app-store';

@Component({
    selector: 'side-navigation',
    imports: [
        SharedModule,
    ],
    templateUrl: './side-navigation.html',
    styleUrl: './side-navigation.scss',
    host: { class: 'flex flex-column h-full overflow-hidden' },
})
export class SideNavigation implements OnInit {
    readonly _router = inject(Router);
    readonly _injector = inject(Injector);
    readonly store = inject(Store);
    readonly navigations = signal<INavigationItem[]>([
        { icon: 'code-branch', title: 'Branches', name: 'azure', route: 'azure', isActive: false },
        { icon: 'clone', title: 'Templates', name: 'templates', route: 'templates', isActive: false },
        { icon: 'images', title: 'Icons', name: 'icons', route: 'icons', isActive: false },
        {
            icon: 'book', title: 'Style Guide', name: 'style-guide', isActive: false,
            styleClass: 'flex flex-column flex-1 min-h-0',
            items: [
                { title: 'Color Palette', name: 'color-palette', isActive: false, route: 'style-guide/color-palette' },
                { title: 'Define Semantic', name: 'define-semantic', isActive: false, route: 'style-guide/define-semantic' },
                {
                    title: 'Components', name: 'component-settings', isActive: false,
                    items: Object.entries(COMPONENT_ITEMS.reduce<Record<string, IComponentItem[]>>((acc, item) => {
                            (acc[item.category] ??= []).push(item);
                            return acc;
                        }, {})
                    ).map(([category, items]) => ({ label: category, items: items.map(item => ({ ...item, isActive: false })) }))
                },
            ]
        },
    ]);
    onItemClick(item: INavigationItem) {
        if (item.route) {
            this._router.navigateByUrl(item.route);
        } else {
            item.isActive = !item.isActive
        }
    }
    ngOnInit(): void {
        effect(
            () => {
                const name = this.store.activeName();
                const navigations = untracked(() => this.navigations())
                for (const navigationItem of navigations) {
                    navigationItem.isActive = navigationItem.name === name;
                    for (const navigationSubItem of navigationItem?.items ?? []) {
                        if (navigationSubItem.name === name) {
                            navigationSubItem.isActive = true;
                            navigationItem.isActive = true;
                        } else {
                            navigationSubItem.isActive = false;
                        }
                        for (const group of navigationSubItem?.items ?? []) {
                            for (const item of group?.items ?? []) {
                                if (item.name === name) {
                                    navigationItem.isActive = true;
                                    navigationSubItem.isActive = true;
                                    item.isActive = true;
                                } else {
                                    item.isActive = false;
                                }
                            }
                        }
                    }
                }
                this.navigations.set([...navigations]);
            },
            { injector: this._injector }
        );
    }
}
