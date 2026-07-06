// import { Signal } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
//import { environment } from '@environments';
// import {  } from '@interfaces';

import { validate, FieldTree } from '@angular/forms/signals';
import { isEqual } from 'lodash';

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
            case 'rem': {
                const tokens = (value() as string).trim().split(/\s+/).filter(Boolean);
                const valid = tokens.length > 0 && tokens.every(token => /^(0|\d*\.?\d+rem)$/.test(token));
                error = valid ? null : { kind: 'rem', message: `${name} should be REM` };
                break;
            }
            default:
                break;
        }
        return error;
    });
}
/** Базовый размер шрифта для перевода px → rem. */
const REM_BASE = 16;

/** Конвертирует значение поля из px в rem (16px → 1rem), поддерживает shorthand ("20px 15px"). */
export function convertToRem(field: FieldTree<string>) {
    const tokens = (field().value() ?? '').trim().split(/\s+/).filter(Boolean);
    if (!tokens.length) { return; }
    const converted = tokens.map(token => {
        if (token.endsWith('rem')) { return token; }          // уже rem — оставляем
        const match = /^(-?\d*\.?\d+)(px)?$/.exec(token);     // "16px" | "16"
        if (!match) { return token; }                         // не число/px — как есть
        const rem = Number.parseFloat(match[1]) / REM_BASE;
        return rem === 0 ? '0' : `${rem}rem`;
    });
    field().value.set(converted.join(' '));
}
const isPlainObject = (val: any): boolean => typeof val === 'object' && val !== null && !Array.isArray(val);
/** Признак «поле не изменилось» — отличается от undefined (валидного значения diff). */
const NO_CHANGE = Symbol('no-change');

/** Дифф одного поля: NO_CHANGE, если изменений нет; иначе — значение/поддифф из A. */
function diffEntry(aVal: any, bVal: any, keyInB: boolean): any {
    if (!keyInB) { return aVal; }                              // в B нет ключа — берём из A
    if (isPlainObject(aVal) && isPlainObject(bVal)) {
        const diff = getDeepDiff(aVal, bVal);
        return diff === undefined ? NO_CHANGE : diff;          // undefined = вложенная ветка не изменилась
    }
    return isEqual(aVal, bVal) ? NO_CHANGE : aVal;             // по значению (вкл. массивы)
}

/**
 * Возвращает только изменённые поля/подполя из `a` относительно `b` (рекурсивно, по значению).
 * Если `a` эквивалентно `b` (изменений нет) — возвращает `undefined`.
 */
export function getDeepDiff(a: any, b: any): any {
    if (typeof a !== 'object' || a === null) {
        return isEqual(a, b) ? undefined : a;   // примитив: равны → undefined, иначе значение
    }
    const bObj = (b !== null && typeof b === 'object') ? b : {};   // защита от null/undefined/примитива
    const result: any = Array.isArray(a) ? [] : {};
    for (const key in a) {
        const entry = diffEntry(a[key], bObj[key], key in bObj);
        if (entry !== NO_CHANGE) { result[key] = entry; }
    }
    return Object.keys(result).length > 0 ? result : undefined;   // нет изменений → undefined
}

/**
 * Разворачивает плоский объект с ключами-путями в вложенный.
 * { "primary.color": "x", "formField.paddingX": "8px" } → { primary: { color: "x" }, formField: { paddingX: "8px" } }
 */
export function unflatten(flat: Record<string, any>): Record<string, any> {
    const result: Record<string, any> = {};
    for (const path in flat) {
        const keys = path.split('.');
        let cur = result;
        for (let i = 0; i < keys.length - 1; i++) {
            if (typeof cur[keys[i]] !== 'object' || cur[keys[i]] === null) { cur[keys[i]] = {}; }
            cur = cur[keys[i]];
        }
        cur[keys.at(-1)!] = flat[path];
    }
    return result;
}
