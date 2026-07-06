import { Component, model, input } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { IFieldMeta } from '@interfaces';
import { SharedModule } from '@shared-module';
import { ColorField } from './color-field/color-field';
import { RemField } from './rem-field/rem-field';

@Component({
    selector: 'form-component',
    imports: [
        SharedModule,
        ColorField, RemField,
    ],
    templateUrl: './form-component.html',
    styleUrl: './form-component.scss',
    host: { class: 'flex align-items-center gap-2' },
})
export class FormComponent implements FormValueControl<string> {
    readonly value = model.required<string>();
    readonly field = input.required<IFieldMeta>();
    changeValueHandler(value: string) {
        this.value.set(value ?? '');
    }
}
