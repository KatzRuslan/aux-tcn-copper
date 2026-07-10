import { Component, OnInit, Injector, effect, inject, signal, untracked } from '@angular/core';
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
                { title: 'Border Radius', name: 'border-radius', isActive: false, route: 'style-guide/border-radius' },
                { title: 'Define Semantic', name: 'define-semantic', isActive: false, route: 'style-guide/define-semantic' },
                { title: 'Css Overrides', name: 'css-overrides', isActive: false, route: 'style-guide/css-overrides' },
                {
                    title: 'Components', name: 'component-settings', isActive: false,
                    items: Object.entries(COMPONENT_ITEMS.reduce<Record<string, IComponentItem[]>>((accumulator, item) => {
                            accumulator[item.category] ??= [];
                            accumulator[item.category].push(item);
                            return accumulator;
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
    /** Проставляет isActive по всему поддереву; узел активен, если совпало имя или активен потомок. */
    private _applyActiveState(node: INavigationItem, name: string): boolean {
        const childActive = (node.items ?? []).map(child => this._applyActiveState(child, name)).some(Boolean);
        node.isActive = node.name === name || childActive;
        return node.isActive;
    }
    ngOnInit(): void {
        effect(
            () => {
                const name = this.store.activeName();
                const navigations = untracked(() => this.navigations());
                navigations.forEach(item => this._applyActiveState(item, name));
                this.navigations.set([...navigations]);
            },
            { injector: this._injector }
        );
    }
}
