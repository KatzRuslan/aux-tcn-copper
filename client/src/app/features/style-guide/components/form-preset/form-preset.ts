import { Component, OnInit, Injector, input, output, linkedSignal, computed, effect, untracked, runInInjectionContext, inject } from '@angular/core';
import { form, FormField, required, readonly } from '@angular/forms/signals';
import { SharedModule } from '@shared-module';
import { FormComponent } from '../form-component/form-component';
import { fieldValidator } from '@helpers/utils.helpers';
import { isEqual } from 'lodash';
import { IGroupMeta } from '@interfaces';

@Component({
    selector: 'form-preset',
    imports: [SharedModule, FormField, FormComponent],
    templateUrl: './form-preset.html',
    styleUrl: './form-preset.scss',
    host: { class: 'flex align-items-start align-content-start flex-wrap gap-3 w-full h-full overflow-auto' }
})
export class FormPreset implements OnInit {
    readonly _injector = inject(Injector);
    readonly vmodel = input.required<Record<string, string>>();
    readonly scheme = input.required<IGroupMeta[]>(); // | IFieldMeta[]
    readonly applyPreset = output<void>();
    readonly formModel = linkedSignal<Record<string, string>>(() => this.vmodel());
    readonly formGroup = computed(() => {
        const fields = this.scheme().flatMap(({ fields }) => fields);
        return untracked(() => runInInjectionContext(this._injector, () =>
            form<Record<string, string>>(this.formModel, (schema) => {
                fields.forEach(({ path, label, type, isReadonly }) => { // nosonar (it will need to be repaired)
                    required(schema[path], { message: `${label} is required` });
                    fieldValidator(schema[path], label, type);
                    if (isReadonly) {
                        readonly(schema[path]);
                    }
                });
            })
        ));
    });
    readonly invalid = computed(() => this.formGroup()().invalid());
    readonly unchanged = computed(() => isEqual(this.formGroup()().value(), this.vmodel()));
    readonly errors = computed(() => this.formGroup()().errorSummary().map(({ message }) => message).filter((message): message is string => !!message));
    getValue() {
        return this.formGroup()().value();
    }
    ngOnInit(): void {
        effect(
            () => {
                this.formGroup()().value();
                this.applyPreset.emit();
            },
            { injector: this._injector }
        );
    }
}
