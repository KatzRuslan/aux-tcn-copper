import { Directive, ElementRef, Renderer2, effect, forwardRef, inject, input, output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

/**
 * Двустороннее связывание для рантайм-шаблонов (.drawer.json): [(dModel)]="vmodel['x']".
 *
 * Зачем не ngModel: NgModel не standalone, а при AOT-сборке рантайм-метаданные скоупов
 * NgModule (ɵɵsetNgModuleScope) вырезаются (ngJitMode=false), поэтому JIT-компилируемым
 * компонентам недоступно содержимое FormsModule/SharedModule. Эта директива standalone —
 * её определение самодостаточно и работает в JIT-скоупе без модулей.
 *
 * Директива выступает полноценным NgControl (некоторые компоненты PrimeNG требуют его
 * жёстко: RadioButton в onInit делает injector.get(NgControl) без optional, Checkbox
 * читает selfControl.value). Внутри — собственный FormControl, синхронизированный
 * с [(dModel)] в обе стороны.
 *
 * Для нативных input/textarea (без ControlValueAccessor) — прямое связывание через DOM.
 */
@Directive({
    selector: '[dModel]',
    providers: [{ provide: NgControl, useExisting: forwardRef(() => DModel) }],
})
export class DModel extends NgControl {
    readonly dModel = input<any>();
    readonly dModelChange = output<any>();
    private readonly _control = new FormControl();
    private readonly _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly _renderer = inject(Renderer2);
    override get control(): FormControl { return this._control; }
    override viewToModelUpdate(value: any): void { this.dModelChange.emit(value); }
    constructor() {
        super();
        this.valueAccessor = inject<ControlValueAccessor[]>(NG_VALUE_ACCESSOR, { self: true, optional: true })?.[0] ?? null;
        if (this.valueAccessor) {
            this.valueAccessor.registerOnChange((value: any) => {
                this._control.setValue(value, { emitEvent: false });
                this.dModelChange.emit(value);
            });
            effect(() => {
                const value = this.dModel();
                this._control.setValue(value, { emitEvent: false });
                this.valueAccessor!.writeValue(value);
            });
            return;
        }
        // нативные input/textarea — без CVA
        const element = this._elementRef.nativeElement;
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            this._renderer.listen(element, 'input', () => this.dModelChange.emit(element.value));
            effect(() => {
                const value = `${this.dModel() ?? ''}`;
                if (element.value !== value) { element.value = value; }
            });
        }
    }
}
