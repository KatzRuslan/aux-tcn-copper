import { Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments';
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
    readonly httpClient: HttpClient;
}
let ctx!: IContext;
export function initBorderRadiusHelperContext(context: IContext) {
    ctx = context;
}
//