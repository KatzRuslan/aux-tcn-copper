import { Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments';
import Aura from '@primeuix/themes/aura';
import { definePreset, $dt } from '@primeuix/themes';
import { IPalette } from '@interfaces';

/**
 * ⚠️ Singleton helper context.
 *
 * Initialized once from StyleGuideStore `onInit`.
 * Assumes a single StyleGuideStore instance and
 * that initialization happens before any usage.
 *
 * Not intended for SSR or multiple store instances.
 */

interface IContext {
    readonly httpClient: HttpClient;
    readonly palettes: Signal<IPalette[]>;
    readonly borderRadius: Signal<Record<string, string>>;
    readonly semantic: Signal<object>;
}
let ctx!: IContext;
export function initStyleGuideHelperContext(context: IContext) {
    ctx = context;
}
//
function createPrimitive() {
    return {
        ...ctx.palettes()
            .map(({ name, colors }) => ({ name, colors: colors.reduce((total, { step, color }) => ({ ...total, [step]: color }), {}) }))
            .reduce((total, { name, colors }) => ({ ...total, [name]: colors }), {}),
        borderRadius: ctx.borderRadius()
    };
}
export function createPreset() {
    // console.log(ctx.palettes())
    // console.log(Aura)
    const aura = definePreset(Aura) as any;
    // console.log(aura)
    // console.log(JSON.stringify(aura.primitive.borderRadius, null, 4))
    // console.log($dt('typography.lineHeight'))
    // console.log(aura.primitive)
    // console.log(aura.semantic)
    // console.log(aura.semantic.surface)
    // console.log(aura.semantic.surface)
    // console.log((ctx.semantic() as any).primary);
    // console.log((ctx.semantic() as any));
    const preset = {
        primitive: createPrimitive(),
        sementic: ctx.semantic(),
    };
    console.log('------------------')
    console.log(preset)
}
