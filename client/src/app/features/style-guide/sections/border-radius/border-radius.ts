import { Component, linkedSignal, computed, inject } from '@angular/core';
import { form, FormField, required, FieldTree, validate } from '@angular/forms/signals';
import { SharedModule } from '@shared-module';
import { Store } from './store/border-radius.store';
import { convertToRem as ConvertToRem, fieldValidator } from '@helpers/utils.helpers';
import { isEqual } from 'lodash';

@Component({
    selector: 'border-radius',
    imports: [SharedModule, FormField],
    templateUrl: './border-radius.html',
    styleUrl: './border-radius.scss',
    host: { class: 'flex flex-column gap-4 p-3 w-full h-full overflow-hidden' },
})
export default class BorderRadius {
    readonly store = inject(Store);
    readonly formModel = linkedSignal<Record<string, string>>(() => this.store.custom());
    readonly formGroup = form<Record<string, string>>(this.formModel, (schema) => {
        this.store.schema().forEach(({ path, label, type }) => {
            required(schema[path], { message: `Border ${label} is required` });
            fieldValidator(schema[path], label, type);
        });
        validate(schema, ({ value }) => {
            return isEqual(value(), this.store.custom()) ? { kind: 'unchanged', message: 'Unchanged' } : null;
        });
    });
    readonly errors = computed(() => this.formGroup().errorSummary().map(({ message }) => message));
    hasError(path: string, kind: string): boolean {
        return this.formGroup[path]().errors().some(e => e.kind === kind);
    }
    convertToRem(field: FieldTree<string>) {
        ConvertToRem(field);
    }
}
