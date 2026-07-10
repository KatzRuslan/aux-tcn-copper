import { Component, inject } from '@angular/core';
import { Store } from '../store/color-palette.store';
import { SharedModule } from '@shared-module';
import { Conductor } from '@shared-components/conductor/conductor';

@Component({
    selector: 'color-palette-header-right',
    imports: [SharedModule, Conductor],
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
