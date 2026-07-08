import { Component, linkedSignal, computed, inject } from '@angular/core';
import { form, FormField, required, FieldTree, validate } from '@angular/forms/signals';
import { SharedModule } from '@shared-module';
import { Store } from './store/css-overrides.store';
import { ICssOverrideItem } from '@interfaces';
import { isEqual } from 'lodash';
import { flattenOverrides, unflattenOverrides } from './store/css-overrides.helper';
import { FormStylesOverrides } from '@shared-components/form-styles-overrides/form-styles-overrides';

@Component({
    selector: 'css-overrides',
    imports: [SharedModule, FormField, FormStylesOverrides],
    templateUrl: './css-overrides.html',
    styleUrl: './css-overrides.scss',
    host: { class: 'flex w-full h-full overflow-hidden' },
})
export default class CssOverrides {
    readonly store = inject(Store);
    readonly overrides = overrides;
    readonly scheme = linkedSignal<ICssOverrideItem[]>(() => unflattenOverrides(this.store.overrides()))
    readonly formModel = linkedSignal<Record<string, string>>(() => this.store.overrides());
    readonly formGroup = form<Record<string, string>>(this.formModel, (schema) => {
        this.scheme().forEach(({ selector, properties }) => properties.forEach(({ path, name }) => {
            required(schema[path], { message: `${selector} -> ${name} is required` });
        }));
        validate(schema, ({ value }) => {
            return isEqual(value(), this.store.overrides()) ? { kind: 'unchanged', message: 'Unchanged' } : null;
        });
    });
    readonly errors = computed(() => this.formGroup().errorSummary().map(({ message }) => message));
    // constructor() {
    //     //
    //     setTimeout(() => {
    //         console.log(this.store.overrides());
    //         console.log(JSON.stringify(this.scheme()))
    //         // const a = this.scheme().map(({ selector, properties }) => properties.map(({ path, name }) => ({ message: `${selector} -> ${name} is required (${path})`  }) )
    //         // const a = this.scheme().map(({ selector, properties }) => properties.map(({ path, name }) => ({ message: `${selector} -> ${name} is required (${path})`  }) )
    //         // )
    //         // console.log(a)
    //     }, 480);
    // }
}
const overrides = [
    {
        selector: 'html',
        properties: [
            { name: 'test', value: 'test', path: 'html|test' },
            { name: 'width', value: '100%', path: 'html|width' },
            { name: 'height', value: '100%', path: 'html|height' },
        ],
    },
    {
        selector: 'body',
        properties: [
            { name: 'test', value: 'test', path: 'body|test' },
            { name: 'margin', value: '0', path: 'body|margin' },
            { name: 'width', value: '100%', path: 'body|width' },
            { name: 'height', value: '100%', path: 'body|height' },
            { name: 'overflow', value: 'hidden', path: 'body|overflow' },
        ],
    },
    { selector: '.test', properties: [{ name: 'test', value: 'test value', path: '.test|test' }] },
    {
        selector: '.test2 .subclass',
        properties: [
            { name: 'test', value: 'test value', path: '.test2 .subclass|test' },
            { name: 'word-break', value: 'hidden', path: 'body|overflow' },
        ],
    },
];
