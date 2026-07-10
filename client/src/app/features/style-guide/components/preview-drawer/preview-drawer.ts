import { Component, computed, inject, signal } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { SharedModule } from '@shared-module';
import { Store } from '@style-guide-store';
import type { IDrawerDemo } from './demos/drawer-demos';

@Component({
    selector: 'preview-drawer',
    imports: [SharedModule, NgComponentOutlet],
    templateUrl: './preview-drawer.html',
    styleUrl: './preview-drawer.scss',
})
export class PreviewDrawer {
    readonly store = inject(Store);
    readonly defaultStyleClass = 'flex flex-column gap-3 px-2';
    /** Карта демо грузится отдельным чанком, чтобы не тянуть все примеры в стартовый бандл. */
    private readonly _demos = signal<Record<string, IDrawerDemo> | null>(null);
    readonly drawer = computed(() => {
        const demos = this._demos();
        return demos ? demos[this.store.active()] ?? demos['empty'] : null;
    });
    constructor() {
        import('./demos/drawer-demos').then(({ DRAWER_DEMOS }) => this._demos.set(DRAWER_DEMOS));
    }
}
