import { Component, input, output } from '@angular/core';
import { SharedModule } from '@shared-module';

@Component({
    selector: 'select-field',
    imports: [SharedModule],
    templateUrl: './select-field.html',
    styleUrl: './select-field.scss',
    host: { class: 'flex align-items-center w-full' },
})
export class SelectField {
    readonly value = input.required<string>();
    readonly inputId = input.required<string>();
    readonly options = input.required<string[]>();
    readonly isReadonly = input<boolean | undefined>(false);
    readonly changeHandler = output<string>();
    test(d: any) { console.log(d) }
}
