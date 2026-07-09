import { Signal } from '@angular/core';
import { getStyleCssOverrides } from '@helpers/utils.helpers';
import { ICssOverrideItem, ICssOverridePropertyItem, IPalette } from '@interfaces';
import { from } from 'rxjs';

/**
 * ⚠️ Singleton helper context.
 *
 * Initialized once from CssOverridesStore `onInit`.
 * Assumes a single CssOverridesStore instance and
 * that initialization happens before any usage.
 *
 * Not intended for SSR or multiple store instances.
 */

interface IContext {
    readonly overrides: Signal<ICssOverrideItem[]>;
    readonly palettes: Signal<IPalette[]>;
}
let ctx!: IContext;
export function initCssOverridesHelperContext(context: IContext) {
    ctx = context;
}
//
export function initCssOverrides() {
    return from(globalThis.runElectronCommand<ICssOverrideItem[]>('read-data', { target: 'data/css-overrides.data' }));
}
export function electronWriteCssOverrides() {
    runElectronCommand('write-data', { target: 'data/css-overrides.data', data: ctx.overrides(), reload: false });
}
function getColorCssOverrides() {
    const colors = ctx.palettes().filter(({ custom }) => custom).flatMap(({ name, colors }) => colors.map(({ step, token, color }) => ({ name, step, token, color })));
    return [
        ...colors.map(({ token, name, color, step }) => [
            // `${token}: ${color};`,
            `.bg-${name}-${step} { background-color: var(${token}) !important; }`,
            `.text-${name}-${step} { color: var(${token}) !important; }`,
            `.border-${name}-${step} { border-color: var(${token}) !important; }`].join(' '))
    ].join(' ');
}
function getDimensionsCssOverrides() {
    const dimensions = Array.from({ length: 100 }, (_, index) => `${index + 1}rem`);
    return [
        ...[
            { label: 'w', property: 'width' },
            { label: 'min-w', property: 'min-width' },
            { label: 'max-w', property: 'max-width' },
            { label: 'h', property: 'height' },
            { label: 'min-h', property: 'min-height' },
            { label: 'max-h', property: 'max-height' },
        ].flatMap((({label, property}) => dimensions.map(dim => `.${label}-${dim} { ${property}: ${dim}; }`))),
        ...dimensions.map(dim => `.fix-w-${dim} { width: ${dim}; min-width: ${dim}; max-width: ${dim}; } .fix-h-${dim} { height: ${dim}; min-height: ${dim}; max-height: ${dim}; }`),
        ...dimensions.map(dim => `.size-${dim} { width: ${dim}; height: ${dim}; } .fix-size-${dim} { width: ${dim}; min-width: ${dim}; max-width: ${dim}; height: ${dim}; min-height: ${dim}; max-height: ${dim}; }`),
    ].join(' ');
}
export function createCssOverrides() {
    const preset: string[] = [
        getColorCssOverrides(),
        getDimensionsCssOverrides(),
        getStyleCssOverrides(ctx.overrides()),
    ];
    return preset.join(' ');
}
