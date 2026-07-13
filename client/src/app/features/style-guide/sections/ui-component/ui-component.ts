import { Component, OnInit, Injector, DestroyRef, signal, computed, effect, viewChild, inject } from '@angular/core';
import { SharedModule } from '@shared-module';
import { Store } from './store/ui-component.store';
import { FormPreset } from '../../components/form-preset/form-preset';
import { FormStyles } from '../../components/form-styles/form-styles';
import { PreviewDrawer } from '../../components/preview-drawer/preview-drawer';

@Component({
    selector: 'ui-component',
    imports: [SharedModule, FormPreset, FormStyles, PreviewDrawer],
    templateUrl: './ui-component.html',
    styleUrl: './ui-component.scss',
    host: { class: 'flex flex-column px-1 pb-1 w-full h-full overflow-hidden' },
})
export default class UiComponent implements OnInit {
    readonly _injector = inject(Injector);
    readonly _destroyRef = inject(DestroyRef);
    readonly store = inject(Store);
    readonly vmodel = computed(() => this.store.vmodel());
    readonly activeTab = signal('0');
    readonly formPreset = viewChild(FormPreset);
    readonly formStyles = viewChild(FormStyles);
    readonly presetErrors = computed(() => this.formPreset()!.errors());
    readonly stylesErrors = computed(() => this.formStyles()!.errors());
    readonly invalid = computed(() => this.formPreset()!.invalid() || this.formStyles()!.invalid() || (this.formPreset()!.unchanged() && this.formStyles()!.unchanged()));
    readonly errors = computed<string[]>(() => ([...this.presetErrors(), ...this.stylesErrors()]));
    addOverride() {
        this.formStyles()!.addOverride();
    }
    // onSubmit() {
    //     this.store.putUiComponent(this.vmodel().name, this.formPreset()!.getValue(), this.formStyles()!.getValue());
    // }
    applyPreset() {
        if (this.formPreset()!.invalid() || this.formStyles()!.invalid()) { return; }
        this.store.applyPreset(this.vmodel().name, this.formPreset()!.getValue(), this.formStyles()!.getValue());
    }
    ngOnInit(): void {
        const addOverrideCss = () => {
            this.activeTab.set('1');
        };
        document.addEventListener('add-override-css', addOverrideCss);
        this._destroyRef.onDestroy(() => document.removeEventListener('add-override-css', addOverrideCss));
    }
}
