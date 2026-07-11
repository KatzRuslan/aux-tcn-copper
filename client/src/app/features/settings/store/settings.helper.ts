import { Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments';
import { ICommonSettings } from '@interfaces';
// import {  } from '@interfaces';

/**
 * ⚠️ Singleton helper context.
 *
 * Initialized once from SettingsStore `onInit`.
 * Assumes a single SettingsStore instance and
 * that initialization happens before any usage.
 *
 * Not intended for SSR or multiple store instances.
 */

interface IContext {
    readonly httpClient: HttpClient;
    settings: Signal<ICommonSettings>
}
let ctx!: IContext;
export function initSettingsHelperContext(context: IContext) {
    ctx = context;
}
//
export function toggleBookmark(component: string) {
    if (ctx.settings().searcherBookmarks.includes(component)) {
        return ctx.settings().searcherBookmarks.filter(bookmark => bookmark !== component);
    }
    return [...ctx.settings().searcherBookmarks, component];
}
export function toggleAvailableComponent(component: string) {
    if (ctx.settings().availableComponents.includes(component)) {
        return {
            availableComponents: ctx.settings().availableComponents.filter(available => available !== component),
            searcherBookmarks: toggleBookmark(component),
        }
    }
    return {
        availableComponents: [...ctx.settings().availableComponents, component],
        searcherBookmarks: ctx.settings().searcherBookmarks,
    }
}
export function electronWriteSettings() {
    runElectronCommand('write-data', { target: 'configurations', data: ctx.settings(), reload: false });
}
