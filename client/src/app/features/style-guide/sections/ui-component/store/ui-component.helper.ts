import { Signal } from '@angular/core';
import Aura from '@primeuix/themes/aura';
import { getDeepDiff, unflatten } from '@helpers/utils.helpers';
import { from, map } from 'rxjs';
import { IUiComponentScheme, IUiComponentSet } from '@interfaces';
import { getStyleCssOverrides } from '../../css-overrides/store/css-overrides.helper';

/**
 * ⚠️ Singleton helper context.
 *
 * Initialized once from UiComponentStore `onInit`.
 * Assumes a single UiComponentStore instance and
 * that initialization happens before any usage.
 *
 * Not intended for SSR or multiple store instances.
 */

interface IContext {
    components: Signal<IUiComponentSet[]>,
}
let ctx!: IContext;
export function initUiComponentHelperContext(context: IContext) {
    ctx = context;
}
//
export function initUiComponent() {
    return from(Promise.all([
        globalThis.runElectronCommand<IUiComponentScheme[]>('read-data', { target: 'schemes/components.scheme' }),
        globalThis.runElectronCommand<IUiComponentSet[]>('read-data', { target: 'data/components.data' }),
    ])).pipe(map(([ schemes, components ]) => ({ schemes, components })));
}
export function electronWriteBorderRadius() {
    runElectronCommand('write-data', { target: 'data/components.data', data: ctx.components(), reload: false });
}
export function createUiComponent() {
    const preset = ctx.components()
        .map(({ name, data, css }) => ({ [name]: css.length ? { ...unflatten(data), css: getStyleCssOverrides(css) } : unflatten(data) }))
        .reduce((total, current) => ({ ...total, ...current }), {});
    return getDeepDiff(preset, Aura.components) ?? {};
}
