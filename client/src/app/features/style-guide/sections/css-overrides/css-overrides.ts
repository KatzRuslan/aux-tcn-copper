import { Component, computed, viewChild, inject } from '@angular/core';
import { SharedModule } from '@shared-module';
import { Store } from './store/css-overrides.store';
import { FormStyles } from '../../components/form-styles/form-styles';

@Component({
    selector: 'css-overrides',
    imports: [SharedModule, FormStyles],
    templateUrl: './css-overrides.html',
    styleUrl: './css-overrides.scss',
    host: { class: 'flex flex-column gap-4 pt-0 px-1 pb-3 w-full h-full overflow-hidden' },
})
export default class CssOverrides {
    readonly store = inject(Store);
    readonly formStyles = viewChild(FormStyles);
    readonly stylesErrors = computed(() => this.formStyles()!.errors());
    readonly invalid = computed(() => this.formStyles()!.invalid() || this.formStyles()!.unchanged());
    readonly errors = computed<string[]>(() => {
        const errors: string[] = [];
        if (this.formStyles()!.unchanged()) {
            errors.push('Unchanged')
        }
        errors.push(...this.stylesErrors())
        return errors;
    });
    addOverride() {
        this.formStyles()!.addOverride();
    }
    onSubmit() {
        this.store.putCssOverrides(this.formStyles()!.getValue());
    }
    applyPreset() {
        if (this.invalid()) { return; }
        this.store.applyPreset(this.formStyles()!.getValue());
    }
}
