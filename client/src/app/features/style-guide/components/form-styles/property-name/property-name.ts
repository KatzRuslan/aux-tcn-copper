import { Component, model, computed } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { CSS_PROPERTIES } from '@seed';
import { SharedModule } from '@shared-module';


@Component({
    selector: 'property-name',
    imports: [SharedModule],
    templateUrl: './property-name.html',
    styleUrl: './property-name.scss',
})
export class PropertyName implements FormValueControl<string> {
    readonly value = model.required<string>();
    readonly suggestions = computed(() => {
        const value = (this.value() ?? '').toLowerCase();
        const properties = CSS_PROPERTIES.filter(property => property.startsWith(value));
        return properties;
    });
    changeValueHandler(value: string) {
        this.value.set(value ?? '');
    }
}
