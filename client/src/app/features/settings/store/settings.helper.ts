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
export function electronWriteSettings() {
    runElectronCommand('write-data', { target: 'configurations', data: ctx.settings(), reload: false });
}
