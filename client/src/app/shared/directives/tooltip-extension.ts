import { Directive, ElementRef, inject } from '@angular/core';
import { Tooltip } from 'primeng/tooltip';

@Directive({
    selector: '[tooltipExtension]',
})
export class TooltipExtension {
    private readonly _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
    private readonly _tooltip = inject(Tooltip);
    constructor() {
        const originalActivate = this._tooltip.activate.bind(this._tooltip);
        this._tooltip.activate = () => {
            const el = this._elementRef.nativeElement;
            if (el.scrollWidth <= el.clientWidth) {
                return; // текст не обрезан → тултип не показываем
            }
            originalActivate();
        };
    }
}
