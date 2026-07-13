import { Component, OnInit, Injector, linkedSignal, computed, inject } from '@angular/core';
import { form, FormField, required, validate } from '@angular/forms/signals';
import { SharedModule } from '@shared-module';
import { FormComponent } from '../../components/form-component/form-component';
import { Store } from './store/border-radius.store';
import { emitOnUserEdit, fieldValidator } from '@helpers/utils.helpers';
import { isEqual } from 'lodash';

@Component({
    selector: 'border-radius',
    imports: [SharedModule, FormField, FormComponent],
    templateUrl: './border-radius.html',
    styleUrl: './border-radius.scss',
    host: { class: 'flex flex-column gap-4 p-3 w-full h-full overflow-hidden' },
})
export default class BorderRadius implements OnInit {
    readonly _injector = inject(Injector);
    readonly store = inject(Store);
    readonly formModel = linkedSignal<Record<string, string>>(() => this.store.borderRadius());
    readonly formGroup = form<Record<string, string>>(this.formModel, (schema) => {
        this.store.scheme().forEach(({ path, label, type }) => {
            required(schema[path], { message: `Border ${label} is required` });
            fieldValidator(schema[path], label, type);
        });
        validate(schema, ({ value }) => {
            return isEqual(value(), this.store.borderRadius()) ? { kind: 'unchanged', message: 'Unchanged' } : null;
        });
    });
    readonly errors = computed(() => this.formGroup().errorSummary().map(({ message }) => message));
    ngOnInit(): void {
        emitOnUserEdit({
            value: () => this.formGroup().value(),
            model: () => this.store.borderRadius(),
            emit: () => this.formGroup().valid() ? this.store.putBorderRadius(this.formGroup().value()) : null,
            injector: this._injector,
        });
    }
}
