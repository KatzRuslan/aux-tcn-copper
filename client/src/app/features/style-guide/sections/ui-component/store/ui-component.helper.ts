import { Signal } from '@angular/core';
import Aura from '@primeuix/themes/aura';
import { getDeepDiff, getStyleCssOverrides, unflatten } from '@helpers/utils.helpers';
import { from, map } from 'rxjs';
import { ICssOverrideItem, IUiComponentScheme, IUiComponentSet } from '@interfaces';
import { updatePreset } from '@primeuix/themes';

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
export function electronWriteUiComponent() {
    runElectronCommand('write-data', { target: 'data/components.data', data: ctx.components(), reload: false });
}
export function createUiComponent() {
    const preset = ctx.components()
        .map(({ name, data, css }) => ({ [name]: css.length ? { ...unflatten(data), css: getStyleCssOverrides(css) } : unflatten(data) }))
        .reduce((total, current) => ({ ...total, ...current }), {});
    return preset;
    // return getDeepDiff(preset, Aura.components) ?? {};
}
// export function applyPreset(name: string, data: Record<string, string>, css: ICssOverrideItem[]) {
//     const components = {
//         [name]: {
//             ...unflatten(data), css: getStyleCssOverrides(css)
//         }
//     }
//     updatePreset({ components });
// }
