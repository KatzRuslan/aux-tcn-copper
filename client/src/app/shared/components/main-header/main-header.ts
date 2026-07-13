import { Component, inject } from '@angular/core';
import { Store } from '@app-store';
import { HeaderRight as ColorPaletteHeaderRight } from '@header-color-palette-right';
import { HeaderRight as CssOverridesHeaderRight } from '@header-css-overrides-right';
import { HeaderRight as DefineSemanticHeaderRight } from '@header-define-semantic-right';
import { HeaderRight as UiComponentHeaderRight } from '@header-ui-component-right';

@Component({
    selector: 'main-header',
    imports: [
        ColorPaletteHeaderRight, CssOverridesHeaderRight, DefineSemanticHeaderRight, UiComponentHeaderRight,
    ],
    templateUrl: './main-header.html',
    styleUrl: './main-header.scss',
    host: { class: 'flex align-items-center p-2 mb-3 gap-3 border-200 border-bottom-1 h-5rem' },
})
export class MainHeader {
    readonly store = inject(Store);
}
