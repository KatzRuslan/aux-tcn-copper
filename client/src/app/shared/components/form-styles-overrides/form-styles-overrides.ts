import { Component, input, output, computed, linkedSignal, effect } from '@angular/core';
import { form, FormField, required, validate, applyEach } from '@angular/forms/signals';
import { ICssOverrideItem } from '@interfaces';
import { SharedModule } from '@shared-module';
import { CSS_PROPERTIES } from '@seed';
import { PropertyName } from './property-name/property-name';
import { PropertyValue } from './property-value/property-value';
import { isEqual, property } from 'lodash';

@Component({
    selector: 'form-styles-overrides',
    imports: [
        SharedModule, FormField,
        PropertyName, PropertyValue,
    ],
    templateUrl: './form-styles-overrides.html',
    styleUrl: './form-styles-overrides.scss',
    host: { class: 'flex flex-column gap-4 p-3 w-full h-full overflow-hidden' },
})
export class FormStylesOverrides {
    readonly vmodel = input.required<ICssOverrideItem[]>();
    readonly submitHandler = output<ICssOverrideItem[]>();
    readonly formModel = linkedSignal(() => this.vmodel());
    readonly formGroup = form<ICssOverrideItem[]>(this.formModel, (schema) => {
        validate(schema, ({ value }) => isEqual(value(), this.vmodel()) ? { kind: 'unchanged', message: 'Unchanged' } : undefined);
        applyEach(schema, (override) => {
            required(override.selector, { message: 'Selector is required' });
            applyEach(override.properties, (property) => {
                required(property.name, { message: 'Property name is required' });
                required(property.value, { message: 'Value is required' });
            });
        });
    });
    readonly errors = computed(() => this.formGroup().errorSummary().map(({ message }) => message));
    getSelecorField(index: number) {
        return this.formGroup[index].selector;
    }
    getPropertyField(overrideIndex: number, propertyIndex: number) {
        return this.formGroup[overrideIndex].properties[propertyIndex];
    }
    addOverride() {
        const override: ICssOverrideItem = {
            selector: '',
            properties: [{ name: '', value: '' }]
        };
    }
    addProperty(overrideIndex: number) {
        const property = { name: '', value: '' };
        this.formModel.update(current =>
            current.map((override, index) => index === overrideIndex ? { ...override, properties: [...override.properties, property] } : override)
        );
    }
    removeOverride(index: number) {
        this.formModel.update(current => current.filter((_, i) => i !== index));
    }
    removeProperty(overrideIndex: number, propertyIndex: number) {
        this.formModel.update(current => current.map(
            (override, i1) => i1 !== overrideIndex ? override : {
                ...override,
                properties: override.properties.filter((_, i2) => i2 !== propertyIndex)
            }
        ));
        if (this.formModel().at(overrideIndex)!.properties.length === 0) {
            this.removeOverride(overrideIndex);
        }
    }
}
