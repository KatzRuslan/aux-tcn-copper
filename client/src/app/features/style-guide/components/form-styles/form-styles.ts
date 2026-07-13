import { Component, OnInit, DestroyRef, Injector, ElementRef, input, output, linkedSignal, computed, inject } from '@angular/core';
import { form, FormField, required, applyEach } from '@angular/forms/signals';
import { emitOnUserEdit } from '@helpers/utils.helpers';
import { ICssOverrideItem } from '@interfaces';
import { SharedModule } from '@shared-module';
import { PropertyName } from './property-name/property-name';
import { PropertyValue } from './property-value/property-value';
import { isEqual } from 'lodash';

@Component({
    selector: 'form-styles',
    imports: [
        SharedModule, FormField,
        PropertyName, PropertyValue,
    ],
    templateUrl: './form-styles.html',
    styleUrl: './form-styles.scss',
    host: { class: 'flex flex-column gap-3 w-full h-full overflow-auto' }
})
export class FormStyles implements OnInit {
    readonly _injector = inject(Injector);
    readonly _destroyRef = inject(DestroyRef);
    readonly _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
    readonly vmodel = input.required<ICssOverrideItem[]>();
    readonly applyPreset = output<void>();
    readonly formModel = linkedSignal(() => this.vmodel());
    readonly formGroup = form<ICssOverrideItem[]>(this.formModel, (schema) => {
        applyEach(schema, (override) => {
            required(override.selector, { message: 'Selector is required' });
            applyEach(override.properties, (property) => {
                required(property.name, { message: 'Property name is required' });
                required(property.value, { message: 'Value is required' });
            });
        });
    });
    readonly errors = computed(() => this.formGroup().errorSummary().map(({ message }) => message).filter((message): message is string => !!message));
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
        this.formModel.update(current => ([...current, override]));
        setTimeout(() => {
            const element = this._elementRef.nativeElement;
            element.scrollTop = element.scrollHeight;
            // фокус на инпут селектора только что добавленного (последнего) оверрайда
            // querySelectorAll возвращает NodeList — без .at()/.map(); Array.from даёт настоящий массив
            const selectorInputs = Array.from(element.querySelectorAll<HTMLInputElement>('input[aria-label="Override selector"]'));
            selectorInputs.at(-1)?.focus();
        });
    }
    addProperty(overrideIndex: number) {
        const property = { name: '', value: '' };
        this.formModel.update(current =>
            current.map((override, index) => index === overrideIndex ? { ...override, properties: [...override.properties, property] } : override)
        );
        setTimeout(() => {
            // фокус на имя только что добавленного (последнего) свойства в карточке своего оверрайда
            const card = this._elementRef.nativeElement.querySelectorAll('p-card')[overrideIndex];
            const nameInputs = Array.from(card?.querySelectorAll<HTMLInputElement>('property-name input') ?? []);
            nameInputs.at(-1)?.focus();
        });
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
    readonly invalid = computed(() => this.formGroup().invalid());
    readonly unchanged = computed(() => isEqual(this.formGroup().value(), this.vmodel()));
    getValue() {
        return this.formGroup().value();
    }
    ngOnInit(): void {
        emitOnUserEdit({
            value: () => this.formGroup().value(),
            model: () => this.vmodel(),
            emit: () => this.applyPreset.emit(),
            injector: this._injector,
        });
        // removeEventListener снимает только ту же ссылку — обработчик обязан быть общей константой
        const addOverrideCss = () => this.addOverride();
        document.addEventListener('add-override-css', addOverrideCss);
        this._destroyRef.onDestroy(() => document.removeEventListener('add-override-css', addOverrideCss));
    }
}
