import { Component, inject } from '@angular/core';
import { Store } from './store/css-overrides.store';
import { FormStylesOverrides } from '@shared-components/form-styles-overrides/form-styles-overrides';

@Component({
    selector: 'css-overrides',
    imports: [FormStylesOverrides],
    templateUrl: './css-overrides.html',
    styleUrl: './css-overrides.scss',
    host: { class: 'flex w-full h-full overflow-hidden' },
})
export default class CssOverrides {
    readonly store = inject(Store);
}
