import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Кастомная иконка «CSS» в стилистике primeicons: viewBox 20×20, цвет — currentColor.
 * Использование (как статические primeicons): <svg dIconCss width="20" height="20"></svg>
 * Через [pIcon] не работает — PIcon грузит только иконки из пакета @primeicons.
 */
@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'svg[dIconCss]',
    template: `
        <svg:text x="10" y="13.2" text-anchor="middle" font-size="9" font-weight="800" letter-spacing="-.2" fill="currentColor" stroke="none" font-family="inherit">CSS</svg:text>
    `,
    host: {
        viewBox: '0 0 20 20',
        fill: 'none',
        'aria-hidden': 'true',
    },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssIcon {}
