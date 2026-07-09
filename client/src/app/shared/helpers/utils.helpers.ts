import { validate } from '@angular/forms/signals';
import { ICssOverrideItem } from '@interfaces';
import { isEqual } from 'lodash';

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
                const valid = tokens.length > 0 && tokens.every(token => /^(0|(\d+(\.\d+)?|\.\d+)rem)$/.test(token));
                error = valid ? null : { kind: 'rem', message: `${name} should be REM` };
                break;
            }
            default:
                break;
        }
        return error;
    });
}
export function getStyleCssOverrides(overrides: ICssOverrideItem[]) {
    return overrides
        .map(({ selector, properties }) => ({ selector, properties: properties.map(({ name, value }) => `${name}: ${value};`).join(' ') }))
        .map(({ selector, properties }) => `${selector} { ${properties} }`)
        .join(' ');
}
//
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
