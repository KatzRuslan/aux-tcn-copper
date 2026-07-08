import { Component, model, input, computed } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { getCssValues } from '@seed';
import { SharedModule } from '@shared-module';

@Component({
    selector: 'property-value',
    imports: [SharedModule],
    templateUrl: './property-value.html',
    styleUrl: './property-value.scss',
})
export class PropertyValue implements FormValueControl<string> {
    readonly value = model.required<string>();
    readonly propertyname = input.required<string>();
    readonly isDisabled = input(true);
    readonly suggestions = computed(() => getCssValues((this.value() ?? '').toLowerCase()));
    changeValueHandler(value: string) {
        this.value.set(value ?? '');
    }
}
