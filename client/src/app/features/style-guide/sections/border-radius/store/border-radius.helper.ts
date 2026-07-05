import { Signal } from '@angular/core';
import { from } from 'rxjs';
// import {  } from '@interfaces';

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
    readonly borderRadius: Signal<{ custom: Record<string, string>; original: Record<string, string>; }>;
}
let ctx!: IContext;
export function initBorderRadiusHelperContext(context: IContext) {
    ctx = context;
}
//
export function getBorderRadius() {
    return from(globalThis.runElectronCommand<any>('read-data', { target: 'border-radius' })).pipe();
}
export function electronWriteBorderRadius() {
    runElectronCommand('write-data', { target: 'border-radius', data: ctx.borderRadius(), reload: false });
}
