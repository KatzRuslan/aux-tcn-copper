import { Signal } from '@angular/core';
// import { environment } from '@environments';
import Aura from '@primeuix/themes/aura';
// import { definePreset, $dt } from '@primeuix/themes';
import { Preset } from '@primeuix/themes/types';
import _preset from '@tcn-preset';
import { definePreset, Theme } from '@primeuix/styled';
import { usePreset } from '@primeuix/themes';
import { getDeepDiff } from '@helpers/utils.helpers';
import { isEqual } from 'lodash';
import { INotification } from '@interfaces';

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
    readonly cssOverrides: Signal<string>;
    readonly components: Signal<Record<string, object>>;
    readonly notifications: Signal<INotification[]>;
}
let ctx!: IContext;
export function initStyleGuideHelperContext(context: IContext) {
    ctx = context;
}
export function electronWritePreset() {
    runElectronCommand('write-data', { target: 'preset', data: getDeepDiff(Theme.getPreset(), Aura), reload: true });
}
export function createPreset() {
    // // console.log(ctx.palettes())
    // // console.log(Aura.primitive)
    // // const aura = definePreset(Aura) as any;
    // // console.log(aura)
    // // console.log(JSON.stringify(aura.primitive.borderRadius, null, 4))
    // // console.log($dt('typography.lineHeight'))
    // // console.log(aura.primitive)
    // // console.log(aura.semantic)
    // // console.log(aura.semantic.surface)
    // // console.log(aura.semantic.surface)
    // // console.log((ctx.semantic() as any).primary);
    // // console.log((ctx.semantic() as any));
    // // console.log('* cssOverrides *********')
    // // console.log();
    // const preset: Preset = {
    //     primitive: {
    //         ...ctx.borderRadius(),
    //         ...ctx.colorPalette(),
    //     },
    //     semantic: ctx.semantic(),
    //     components: ctx.components(),
    //     css: ctx.cssOverrides(),
    // };
    console.log('= preset =========================')
    // console.log(preset)
    // electronWritePreset(preset);
}
export function applyPreset() {
    const preset: any = {
        primitive: {
            ...ctx.borderRadius(),
            ...ctx.colorPalette(),
        },
        semantic: ctx.semantic(),
        components: ctx.components(),
        css: ctx.cssOverrides(),
    };
    usePreset(definePreset(Aura, preset));
    const deepDiff = getDeepDiff(preset, Aura);
    const notifications = [...ctx.notifications()].filter(({ type }) => type !== 'unsaved');
    if (!isEqual(deepDiff, _preset)) {
        notifications.push({
            type: 'unsaved', title: 'Preset changed. Message should be changed',
            options: [
                { name: 'borderRadius', isEqual: isEqual(deepDiff.primitive.borderRadius, _preset.primitive.borderRadius) },
                { name: 'semantic', isEqual: isEqual(deepDiff.semantic, _preset.semantic) },
                { name: 'components', isEqual: isEqual(deepDiff.components, _preset.components) },
                { name: 'css', isEqual: isEqual(deepDiff.css, _preset.css) },
            ].filter(({ isEqual }) => !isEqual).map(({ name }) => name)
        });
    }
    console.log(notifications)
    return notifications;
}
/** Пишет на диск текущий активный пресет: Aura + ваш preset + все рантайм-updatePreset, слитые движком тем. */
// export function electronWritePreset2(): Preset {
//     const current = Theme.getPreset() as Preset;

//     console.log('= current preset =========================');
//     console.log(preset);
//     // electronWritePreset(preset);
//     return preset;
// }
