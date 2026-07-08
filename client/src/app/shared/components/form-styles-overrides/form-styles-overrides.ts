import { Component, input, output, computed, linkedSignal } from '@angular/core';
import { form, FormField, required, FieldTree, validate } from '@angular/forms/signals';
import { ICssOverrideItem } from '@interfaces';
import { SharedModule } from '@shared-module';
import { PropertyName } from './property-name/property-name';
import { PropertyValue } from './property-value/property-value';
import { property } from 'lodash';

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
    readonly formGroup = form<ICssOverrideItem[]>(this.formModel, (shema) => {
        console.log(shema[0])
    });
    readonly errors = computed(() => []);
    getSelecorField(index: number) {
        return this.formGroup[index].selector;
    }
    getPropertyField(overrideIndex: number, propertyIndex: number) {
        return this.formGroup[overrideIndex].properties[propertyIndex];
    }
    removeOverride(index: number) {
        this.formModel.update(current => current.filter((_, i) => i !== index));
        this.submitHandler.emit(this.formGroup().value());
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
        } else {
            this.submitHandler.emit(this.formGroup().value());
        }
    }
}
