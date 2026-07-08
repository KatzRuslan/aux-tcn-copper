import { Signal } from '@angular/core';
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
    readonly overrides: Signal<Record<string, string>>;
    readonly palettes: Signal<IPalette[]>;
    readonly surface1000: Signal<string>;
}
let ctx!: IContext;
export function initCssOverridesHelperContext(context: IContext) {
    ctx = context;
}
//
export function initCssOverrides() {
    return from(globalThis.runElectronCommand<Record<string, string>>('read-data', { target: 'data/css-overrides.data' }));
}
export function electronWriteCssOverrides() {
    runElectronCommand('write-data', { target: 'data/css-overrides.data', data: ctx.overrides(), reload: false });
}
export function flattenOverrides(items: ICssOverrideItem[]): Record<string, string> {
    return Object.fromEntries(items.flatMap(({ selector, properties }) =>
        properties.filter(({ name }) => name).map(({ name, value }) => [`${selector}|${name}`, value])));
}
export function unflattenOverrides(flat: Record<string, string>): ICssOverrideItem[] {
    const groups = new Map<string, ICssOverridePropertyItem[]>();
    for (const [key, value] of Object.entries(flat)) {
        const splitAt = key.lastIndexOf('|');
        const selector = key.slice(0, splitAt);
        const name = key.slice(splitAt + 1);
        if (!groups.has(selector)) { groups.set(selector, []); }
        groups.get(selector)!.push({ name, value, path: key });
    }
    return [...groups.entries()].map(([selector, properties]) => ({ selector, properties }));
}
function getColorCssOverrides() {
    const colors = ctx.palettes().filter(({ custom }) => custom).flatMap(({ name, colors }) => colors.map(({ step, token, color }) => ({ name, step, token, color })));
    return [
        `--p-surface-1000: ${ctx.surface1000()};`,
        `.surface-1000 { background-color: light-dark(var(--p-surface-1000), var(--p-surface-0)) !important; }`,
        `.text-1000 { color: light-dark(var(--p-surface-1000), var(--p-surface-0)) !important; }`,
        `.border-1000 { border-color: light-dark(var(--p-surface-1000), var(--p-surface-0)) !important; }`,
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
    ];
    return preset.join(' ');
}
