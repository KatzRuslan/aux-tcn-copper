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
    readonly isReadonly = input<boolean | undefined>(false);
    readonly changeHandler = output<string>();
    readonly remInvalid = computed(() => {
        const tokens = (this.value() ?? '').trim().split(/\s+/).filter(Boolean);
        // невалидно, если пусто или хоть один токен не '0' и не число+rem
        return !tokens.length || tokens.some(token => !/^(0|\d*\.?\d+rem)$/.test(token));
    });
    convert() {
        const tokens = (this.value() ?? '').trim().split(/\s+/).filter(Boolean);
        if (!tokens.length) { return; }
        const converted = tokens.map(token => {
            if (token.endsWith('rem')) { return token; }          // уже rem — оставляем
            const match = /^(-?\d*\.?\d+)(px)?$/.exec(token);     // "16px" | "16"
            if (!match) { return token; }                         // не число/px — как есть
            const rem = Number.parseFloat(match[1]) / REM_BASE;
            return rem === 0 ? '0' : `${rem}rem`;
        });
        this.changeHandler.emit(converted.join(' '));
    }
}
