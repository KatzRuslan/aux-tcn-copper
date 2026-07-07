import { Signal } from '@angular/core';
import { getDeepDiff, unflatten } from '@helpers/utils.helpers';
import Aura from '@primeuix/themes/aura';
import { isEqual } from 'lodash';
import { from } from 'rxjs';
// import {  } from '@interfaces';

/**
 * ⚠️ Singleton helper context.
 *
 * Initialized once from SemanticStore `onInit`.
 * Assumes a single SemanticStore instance and
 * that initialization happens before any usage.
 *
 * Not intended for SSR or multiple store instances.
 */

interface IContext {
    // readonly httpClient: HttpClient;
    readonly semantic: Signal<Record<string, string>>;
    readonly colorSteps: Signal<number[]>;
}
let ctx!: IContext;
export function initSemanticHelperContext(context: IContext) {
    ctx = context;
}
//
export function getSemantic() {
    return from(globalThis.runElectronCommand<any>('read-data', { target: 'semantic' })).pipe();
}
export function createSemantic() {
    const flaten = { ...ctx.semantic() };
    const primary = ctx.colorSteps()
        .map(step => ({ key: step, value: `{${ctx.semantic()['primarySet']}.${step}}` }))
        .reduce((total, { key, value }) => ({ ...total, [key]: value }), {});
    delete flaten['primarySet'];
    const [surfaceLight, surfaceDark] = ctx.semantic()['surfaceSet'].split(',').map(node => node.trim());
    const surface = ctx.colorSteps()
        .map(step => ({ key: step, value: `light-dark({${surfaceLight}.${step}}, {${surfaceDark}.${step}})` }))
        .reduce((total, { key, value }) => ({ ...total, [key]: value }), {});
    delete flaten['surfaceSet'];
    const preset: any = unflatten(flaten);
    preset.primary = {
        ...preset.primary,
        ...primary
    };
    preset.surface = {
        0: flaten['surface.0'],
        ...surface,
        1000: flaten['surface.1000'],
    };
    return getDeepDiff(preset, Aura.semantic) ?? {};
}
