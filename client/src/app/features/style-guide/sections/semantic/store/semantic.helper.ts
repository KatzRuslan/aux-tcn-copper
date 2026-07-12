import { Signal } from '@angular/core';
import Aura from '@primeuix/themes/aura';
import { getDeepDiff, unflatten } from '@helpers/utils.helpers';
import { from, map } from 'rxjs';
import { IGroupMeta } from '@interfaces';
import { updatePreset } from '@primeuix/themes';

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
export function initSemantis() {
    return from(Promise.all([
        globalThis.runElectronCommand<IGroupMeta[]>('read-data', { target: 'schemes/semantic.scheme' }),
        globalThis.runElectronCommand<Record<string, string>>('read-data', { target: 'data/semantic.data' }),
    ])).pipe(map(([ scheme, semantic ]) => ({ scheme, semantic })));
}
export function electronWriteSemantic() {
    runElectronCommand('write-data', { target: 'data/semantic.data', data: ctx.semantic(), reload: false });
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
    };
    return getDeepDiff(preset, Aura.semantic) ?? {};
}
export function applyPreset(data: Record<string, string>) {
    const flaten = { ...data };
    const primary = ctx.colorSteps()
        .map(step => ({ key: step, value: `{${data['primarySet']}.${step}}` }))
        .reduce((total, { key, value }) => ({ ...total, [key]: value }), {});
    delete flaten['primarySet'];
    const [surfaceLight, surfaceDark] = data['surfaceSet'].split(',').map(node => node.trim());
    const surface = ctx.colorSteps()
        .map(step => ({ key: step, value: `light-dark({${surfaceLight}.${step}}, {${surfaceDark}.${step}})` }))
        .reduce((total, { key, value }) => ({ ...total, [key]: value }), {});
    delete flaten['surfaceSet'];
    const semantic: any = unflatten(flaten);
    semantic.primary = {
        ...semantic.primary,
        ...primary
    };
    semantic.surface = {
        0: flaten['surface.0'],
        ...surface,
    };
    updatePreset({ semantic });
    console.log(semantic)
}
