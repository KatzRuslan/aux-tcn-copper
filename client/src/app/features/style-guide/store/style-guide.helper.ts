import { Signal } from '@angular/core';
import { environment } from '@environments';
import Aura from '@primeuix/themes/aura';
import { definePreset, $dt } from '@primeuix/themes';

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
    readonly colorPalette: Signal<Record<string, object>>;
    readonly borderRadius: Signal<Record<string, string>>;
    readonly semantic: Signal<object>;
}
let ctx!: IContext;
export function initStyleGuideHelperContext(context: IContext) {
    ctx = context;
}
export function createPreset() {
    // console.log(ctx.palettes())
    // console.log(Aura.primitive)
    // const aura = definePreset(Aura) as any;
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
        primitive: {
            ...ctx.borderRadius(),
            ...ctx.colorPalette(),
        },
        semantic: ctx.semantic(),
    };
    console.log('= preset =========================')
    console.log(preset)
}
