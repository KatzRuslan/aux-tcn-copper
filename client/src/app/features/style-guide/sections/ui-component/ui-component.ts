import { Component, signal, computed, inject, viewChild } from '@angular/core';
import { SharedModule } from '@shared-module';
import { Store } from './store/ui-component.store';
import { FormPreset } from '../../components/form-preset/form-preset';
import { FormStyles } from '../../components/form-styles/form-styles';

@Component({
    selector: 'ui-component',
    imports: [SharedModule, FormPreset, FormStyles],
    templateUrl: './ui-component.html',
    styleUrl: './ui-component.scss',
    host: { class: 'flex flex-column gap-4 pt-0 px-1 pb-3 w-full h-full overflow-hidden' },
})
export default class UiComponent {
    readonly store = inject(Store);
    readonly vmodel = computed(() => this.store.vmodel());
    readonly activeTab = signal('0');
    readonly formPreset = viewChild(FormPreset);
    readonly formStyles = viewChild(FormStyles);
    readonly presetErrors = computed(() => this.formPreset()!.errors());
    readonly stylesErrors = computed(() => this.formStyles()!.errors());
    readonly errors = computed<string[]>(() => {
        const errors: string[] = [];
        for (const error of [...this.presetErrors(), ...this.stylesErrors()]) {
            if (!errors.includes(error)) {
                errors.push(error);
            }
        }
        return errors;
    });
    addOverride() {
        this.formStyles()!.addOverride();
    }
    constructor() {
        setTimeout(() => {
            console.log(this.store.vmodel())
        }, 860);
    }
}
