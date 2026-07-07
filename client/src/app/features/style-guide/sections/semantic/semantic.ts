import { Component, linkedSignal, computed, inject, effect } from '@angular/core';
import { form, FormField, required, FieldTree, validate, readonly } from '@angular/forms/signals';
import { SharedModule } from '@shared-module';
import { FormComponent } from '@shared-components/form-component/form-component';
import { Store } from './store/semantic.store';
import { convertToRem as ConvertToRem, fieldValidator } from '@helpers/utils.helpers';
import { isEqual } from 'lodash';

@Component({
    selector: 'semantic',
    imports: [SharedModule, FormField, FormComponent],
    templateUrl: './semantic.html',
    styleUrl: './semantic.scss',
    host: { class: 'flex flex-column gap-4 p-3 w-full h-full overflow-hidden' },
})
export default class Semantic {
    readonly store = inject(Store);
    readonly formModel = linkedSignal<Record<string, string>>(() => this.store.semantic());
    readonly formGroup = form<Record<string, string>>(this.formModel, (schema) => {
        this.store.schema().flatMap(({ fields }) => fields).forEach(({ path, label, type, isReadonly }) => {
            required(schema[path], { message: `Border ${label} is required` });
            fieldValidator(schema[path], label, type);
            if (isReadonly) {
                readonly(schema[path]);
            }
            // readonly(schema[path], { when: () => this.someSignal() });
        });
        validate(schema, ({ value }) => {
            return isEqual(value(), this.store.semantic()) ? { kind: 'unchanged', message: 'Unchanged' } : null;
        });
    });
    readonly errors = computed(() => this.formGroup().errorSummary().map(({ message }) => message));
    hasError(path: string, kind: string): boolean {
        return this.formGroup[path]().errors().some(e => e.kind === kind);
    }
    convertToRem(field: FieldTree<string>) {
        ConvertToRem(field);
    }
    constructor() {
        // setTimeout(() => {
        //     console.log(this.formGroup().value())
        //     console.log(this.store.schema())
        // }, 860);
        effect(() => console.log(this.formGroup().value()))
    }
}
