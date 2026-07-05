import { Signal } from '@angular/core';
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
}
let ctx!: IContext;
export function initSemanticHelperContext(context: IContext) {
    ctx = context;
}
//
export function getSemantic() {
    return from(globalThis.runElectronCommand<any>('read-data', { target: 'semantic' })).pipe();
}
