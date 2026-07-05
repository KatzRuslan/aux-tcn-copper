// import { Signal } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
//import { environment } from '@environments';
// import {  } from '@interfaces';

import { validate, FieldTree } from '@angular/forms/signals';

/**
 * ⚠️ Singleton helper context.
 *
 * Initialized once from Store `onInit`.
 * Assumes a single UtilsStore instance and
 * that initialization happens before any usage.
 *
 * Not intended for SSR or multiple store instances.
 */

interface IContext {
    // readonly httpClient: HttpClient;
}
let ctx!: IContext;
export function initUtilsHelperContext(context: IContext) {
    ctx = context;
}
//
export function fieldValidator(field: Parameters<typeof validate>[0], name: string, type: string) {
    return validate(field, ({ value }) => {
        if (value() === null) {
            return null;
        }
        let error: { kind: string; message: string } | null = null;
        switch (type) {
            case '':
                //-
                break;
            case 'rem':
                error = /^(0|\d*\.?\d+rem)$/.test(value() as string) ? null : { kind: 'rem', message: `${name} should be REM` };
                break;
            default:
                break;
        }
        return error;
    });
}
/** Базовый размер шрифта для перевода px → rem. */
const REM_BASE = 16;

/** Конвертирует значение поля из px в rem (16px → 1rem). Не-px значения (rem/0/пусто) оставляет как есть. */
export function convertToRem(field: FieldTree<string>) {
    const raw = (field().value() ?? '').trim();
    const match = /^(-?\d*\.?\d+)(px)?$/.exec(raw);   // "16px" | "16"
    if (!match || raw.endsWith('rem')) { return; }
    const rem = Number.parseFloat(match[1]) / REM_BASE;
    field().value.set(rem === 0 ? '0' : `${rem}rem`);
}
