import { Component, input, output, computed } from '@angular/core';
import { SharedModule } from '@shared-module';

const REM_BASE = 16;

@Component({
    selector: 'rem-field',
    imports: [SharedModule],
    templateUrl: './rem-field.html',
    styleUrl: './rem-field.scss',
    host: { class: 'flex align-items-center w-full' }
})
export class RemField {
    readonly value = input.required<string>();
    readonly inputId = input.required<string>();
    readonly changeHandler = output<string>();
    readonly remInvalid = computed(() => {
        const value = this.value();
        return !/^(0|\d*\.?\d+rem)$/.test(value);
    });
    convert() {
        const raw = (this.value() ?? '').trim();
        const match = /^(-?\d*\.?\d+)(px)?$/.exec(raw);   // "16px" | "16"
        if (!match || raw.endsWith('rem')) { return; }
        const rem = Number.parseFloat(match[1]) / REM_BASE;
        this.changeHandler.emit(rem === 0 ? '0' : `${rem}rem`);
    }
}
