import { Component, computed, inject, resource } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { SharedModule } from '@shared-module';
import { Store } from '@style-guide-store';

@Component({
    selector: 'preview-drawer',
    imports: [SharedModule, NgComponentOutlet],
    templateUrl: './preview-drawer.html',
    styleUrl: './preview-drawer.scss',
})
export class PreviewDrawer {
    readonly store = inject(Store);
    readonly active = computed(() => this.store.vmDrawer().active);
    readonly isAvailable = computed(() => this.store.vmDrawer().isAvailable);
    readonly isBookmarked = computed(() => this.store.vmDrawer().isBookmarked);
    readonly defaultStyleClass = 'flex flex-column gap-3 px-2';
    /** Карта демо грузится отдельным чанком, чтобы не тянуть все примеры в стартовый бандл. */
    private readonly _demos = resource({
        loader: () => import('./demos/drawer-demos').then(({ DRAWER_DEMOS }) => DRAWER_DEMOS),
    });
    readonly drawer = computed(() => {
        const demos = this._demos.value();
        return demos ? demos[this.active()] ?? demos['empty'] : null;
    });
}
