import { Component, model, input, computed } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { IFieldMeta } from '@interfaces';
import { SharedModule } from '@shared-module';
import { ColorField } from './color-field/color-field';
import { RemField } from './rem-field/rem-field';
import { SelectField } from './select-field/select-field';
import { definePreset } from '@primeuix/themes';
import preset from '@tcn-preset';
import Aura from '@primeuix/themes/aura';
import { get } from 'lodash';

interface IRevert {
    title: string;
    value: string;
    disabled: boolean;
    icon: string;
}

@Component({
    selector: 'form-component',
    imports: [
        SharedModule,
        ColorField, RemField, SelectField,
    ],
    templateUrl: './form-component.html',
    styleUrl: './form-component.scss',
    host: { class: 'flex align-items-center gap-2' },
})
export class FormComponent implements FormValueControl<string> {
    readonly value = model.required<string>();
    readonly field = input.required<IFieldMeta>();
    readonly source = input.required<string>();
    readonly auraValue = computed(() => get(Aura, `${this.source()}.${this.field().path}`) as string | undefined);
    readonly presetValue = computed(() => get(preset, `${this.source()}.${this.field().path}`) as string | undefined);
    readonly reverts = computed<IRevert[] | undefined>(() => {
        const reverts = [
            { title: `Aura:   ${this.auraValue()}`, value: `${this.auraValue()}`, disabled: this.auraValue() === this.value(), icon: 'undo' },
            { title: `Preset: ${this.presetValue()}`, value: `${this.presetValue()}`, disabled: this.presetValue() === this.value(), icon: 'refresh' },
        ].filter(({ value, disabled }) => value !== 'undefined' && !disabled);
        return reverts.length ? reverts : undefined;
    });
    changeValueHandler(value: string) {
        this.value.set(value ?? '');
    }
    constructor() {
        setTimeout(() => {
            console.clear()
            // console.log(this.value())
            // console.log(this.auraValue())
            // console.log(this.presetValue())
            console.log(this.reverts())
            console.log()
            console.log()
        }, 480);
    }
}
