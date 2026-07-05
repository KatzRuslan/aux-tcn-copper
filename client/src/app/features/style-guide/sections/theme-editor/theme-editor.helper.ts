import Aura from '@primeuix/themes/aura';
import { $dt, updatePreset } from '@primeuix/themes';
import { merge } from 'lodash';
import { FieldType, GroupMeta } from './theme-editor.schema';

/**
 * Утилиты для чтения значений токенов из пресета/кастом-пресета,
 * приведения к редактируемому виду и записи обратно (с сохранением ссылок).
 */

const REF_RE = /^\{(.+)\}$/;
const LIGHT_DARK_RE = /^light-dark\(\s*(.+?)\s*,\s*(.+?)\s*\)$/i;

export type Semantic = Record<string, any>;
/** Накопленные оверрайды кастом-пресета: { semantic: { ...пути } } */
export interface CustomPreset { semantic: Semantic; }

export function deepGet(obj: any, path: string): any {
    return path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
}

/** Иммутабельная установка значения по dot-пути — возвращает новый объект. */
export function deepSet<T extends Record<string, any>>(obj: T, path: string, value: unknown): T {
    const keys = path.split('.');
    const clone: any = { ...obj };
    let cur = clone;
    for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        cur[k] = cur[k] && typeof cur[k] === 'object' ? { ...cur[k] } : {};
        cur = cur[k];
    }
    cur[keys[keys.length - 1]] = value;
    return clone;
}

/** semantic с наложенными оверрайдами (кастом поверх базового Aura). */
export function mergedSemantic(custom: CustomPreset): Semantic {
    return merge({}, (Aura as any).semantic, custom.semantic ?? {});
}

/**
 * Приводит токен к редактируемому виду (single-value, ссылки сохраняются):
 * `light-dark(a, b)` → берём светлую ветку `a`; результат — либо `{ref}`, либо литерал.
 */
export function toEditable(token: string | undefined): string {
    if (token == null) return '';
    const ld = LIGHT_DARK_RE.exec(token.trim());
    return ld ? ld[1].trim() : token.trim();
}

/** true, если значение — ссылка на токен `{path}`. */
export function isRef(token: string): boolean {
    return REF_RE.test(token.trim());
}

/** `{primary.500}` → `primary.500` (или сам токен, если не ссылка). */
export function refPath(token: string): string {
    const m = REF_RE.exec(token.trim());
    return m ? m[1] : token;
}

/**
 * Разрешает токен в конкретное значение для превью (следует ссылкам, берёт светлую ветку).
 * Использует официальный резолвер $dt (работает после инициализации темы).
 */
export function resolvePreview(token: string, depth = 0): string {
    if (!token || depth > 20) return token;
    const editable = toEditable(token);
    if (isRef(editable)) {
        try {
            const value = $dt(refPath(editable)).value;
            return typeof value === 'string' ? resolvePreview(value, depth + 1) : String(value ?? editable);
        } catch {
            return editable;
        }
    }
    return editable;
}

/** Кандидаты-ссылки для дропдауна, сгруппированные по палитре/группе. */
export interface RefOption { label: string; value: string; }      // value = "{path}"
export interface RefGroup { label: string; items: RefOption[]; }

export function refCandidates(type: FieldType): RefGroup[] {
    const primitive = (Aura as any).primitive as Record<string, any>;
    const groups: RefGroup[] = [];
    for (const [name, scale] of Object.entries(primitive)) {
        if (!scale || typeof scale !== 'object') continue;
        const keys = Object.keys(scale);
        // цветовые шкалы: ключи 50..950; размерные (borderRadius): none..xl
        const isColorScale = keys.some(k => /^\d+$/.test(k));
        if (type === 'color' && !isColorScale) continue;
        if (type === 'size' && isColorScale) continue;
        if (type !== 'color' && type !== 'size') continue;
        groups.push({
            label: name,
            items: keys.map(step => ({ label: `${name}.${step}`, value: `{${name}.${step}}` })),
        });
    }
    return groups;
}

/** Строит модель формы (плоский Record<path, editableString>) из кастом-пресета поверх Aura. */
export function extractModel(schema: GroupMeta[], custom: CustomPreset): Record<string, string> {
    const semantic = mergedSemantic(custom);
    const model: Record<string, string> = {};
    for (const group of schema) {
        for (const field of group.fields) {
            model[field.path] = toEditable(typeof deepGet(semantic, field.path) === 'string' ? deepGet(semantic, field.path) : '');
        }
    }
    return model;
}

/**
 * Записывает изменённое значение поля в кастом-пресет и применяет тему живьём.
 * value — уже сериализованный токен ("{primary.500}" | "#ffffff" | "6px" ...).
 * Возвращает новый кастом-пресет.
 */
export function applyFieldChange(custom: CustomPreset, path: string, value: string): CustomPreset {
    const next: CustomPreset = { semantic: deepSet(custom.semantic ?? {}, path, value) };
    updatePreset({ semantic: next.semantic });
    return next;
}
