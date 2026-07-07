import { Signal } from '@angular/core';
import Aura from '@primeuix/themes/aura';
import { getDeepDiff, unflatten } from '@helpers/utils.helpers';
import { from, map } from 'rxjs';
import { IFieldMeta } from '@interfaces';

/**
 * ⚠️ Singleton helper context.
 *
 * Initialized once from BorderRadiusStore `onInit`.
 * Assumes a single BorderRadiusStore instance and
 * that initialization happens before any usage.
 *
 * Not intended for SSR or multiple store instances.
 */

interface IContext {
    readonly borderRadius: Signal<Record<string, string>>;
}
let ctx!: IContext;
export function initBorderRadiusHelperContext(context: IContext) {
    ctx = context;
}
//
export function initBorderRadius() {
    return from(Promise.all([
        globalThis.runElectronCommand<IFieldMeta[]>('read-data', { target: 'schemes/border-radius.scheme' }),
        globalThis.runElectronCommand<Record<string, string>>('read-data', { target: 'data/border-radius.data' }),
    ])).pipe(map(([ scheme, borderRadius ]) => ({ scheme, borderRadius })));
}
export function electronWriteBorderRadius() {
    runElectronCommand('write-data', { target: 'data/border-radius.data', data: ctx.borderRadius(), reload: false });
}
export function createBorderRadius() {
    const preset = unflatten(ctx.borderRadius());
    return getDeepDiff(preset, Aura.primitive);
}

