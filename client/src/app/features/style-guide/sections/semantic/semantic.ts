import { Component, computed, viewChild, inject } from '@angular/core';
import { SharedModule } from '@shared-module';
import { Store } from './store/semantic.store';
import { FormPreset } from '../../components/form-preset/form-preset';
import { PreviewDrawer } from '../../components/preview-drawer/preview-drawer';

@Component({
    selector: 'semantic',
    imports: [SharedModule, FormPreset, PreviewDrawer],
    templateUrl: './semantic.html',
    styleUrl: './semantic.scss',
    host: { class: 'flex flex-column w-full h-full overflow-hidden' },
})
export default class Semantic {
    readonly store = inject(Store);
    readonly formPreset = viewChild(FormPreset);
    readonly presetErrors = computed(() => this.formPreset()!.errors());
    readonly invalid = computed(() => this.formPreset()!.invalid() || this.formPreset()!.unchanged());
    readonly errors = computed<string[]>(() => {
        const errors: string[] = [];
        if (this.formPreset()!.unchanged()) {
            errors.push('Unchanged')
        }
        errors.push(...this.presetErrors())
        return errors;
    });
    onSubmit() {
        this.store.putSemantic(this.formPreset()!.getValue());
    }
    applyPreset() {
        if (this.formPreset()!.invalid()) { return; }
        this.store.applyPreset(this.formPreset()!.getValue());
    }
}
