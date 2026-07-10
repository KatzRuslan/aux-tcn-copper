import { Component, inject } from '@angular/core';
import { Store } from '../store/color-palette.store';
import { SharedCoreModule } from '@shared-core-module';

@Component({
    selector: 'color-palette-header-right',
    imports: [SharedCoreModule],
    templateUrl: './header-right.html',
    styleUrl: './header-right.scss',
    host: { class: 'flex align-items-center gap-3' },
})
export class HeaderRight {
    readonly store = inject(Store);
    addCustomPalette(detail: string) {
        globalThis.dispatchEvent(new CustomEvent('add-palette-color', { detail }));
    }
}
