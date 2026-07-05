import Aura from '@primeuix/themes/aura';

/**
 * Schema-driven описание редактируемых semantic-токенов темы.
 *
 * Гибридный подход: структура/типы выводятся автоматически из пресета Aura,
 * а точечные лейблы/типы можно переопределить через OVERRIDES.
 */

export type FieldType = 'color' | 'size' | 'number' | 'string' | 'select' | 'shadow';

export interface FieldMeta {
    /** путь внутри semantic, напр. "primary.color", "formField.paddingX" */
    path: string;
    label: string;
    type: FieldType;
    /** опции для select (напр. fontWeight) */
    options?: string[];
}

export interface GroupMeta {
    /** ключ верхнего уровня semantic, напр. "primary" */
    key: string;
    label: string;
    fields: FieldMeta[];
}

/** camelCase / dotted → "Human Readable" */
export function humanize(key: string): string {
    const last = key.split('.').pop() ?? key;
    return last
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/[-_]/g, ' ')
        .replace(/^\w/, c => c.toUpperCase());
}

/** Определение типа поля по имени ключа (надёжно для Aura), с фолбэком по значению. */
export function inferType(key: string, value: string): FieldType {
    const k = key.toLowerCase();
    if (/color|background/.test(k)) return 'color';
    if (/shadow/.test(k)) return 'shadow';
    if (k === 'fontweight') return 'select';
    if (k === 'fontfamily') return 'string';
    if (/opacity|lineheight/.test(k)) return 'number';
    if (/padding|radius|gutter|size|width|offset|gap|height/.test(k)) return 'size';
    // фолбэк по значению
    const v = String(value ?? '').trim();
    if (/^#|^rgb|^hsl|^light-dark\(/i.test(v)) return 'color';
    if (/\d(px|rem|em|%|s|ms)$/i.test(v)) return 'size';
    if (/^-?\d+(\.\d+)?$/.test(v)) return 'number';
    return 'string';
}

/** Точечные переопределения авто-схемы. */
interface Override { label?: string; type?: FieldType; options?: string[]; }
const OVERRIDES: Record<string, Override> = {
    'formField.fontWeight': { type: 'select', options: ['normal', '500', '600', '700', 'bold'] },
    'disabledOpacity': { type: 'number', label: 'Disabled Opacity' },
    'transitionDuration': { type: 'size', label: 'Transition Duration' },
};

/** Лейблы групп верхнего уровня (иначе — humanize ключа). */
const GROUP_LABELS: Record<string, string> = {
    primary: 'Primary',
    formField: 'Form Field',
    surface: 'Surface',
    text: 'Text',
    content: 'Content',
    navigation: 'Navigation',
    overlay: 'Overlay',
    list: 'List',
    mask: 'Mask',
    highlight: 'Highlight',
    focusRing: 'Focus Ring',
    typography: 'Typography',
};

/** ключи, которые редактировать не имеет смысла */
const SKIP = /(^|\.)fontFamily$/;

/** Рекурсивно собирает leaf-поля (строковые значения) внутри объекта semantic-группы. */
function collectFields(obj: Record<string, any>, prefix: string): FieldMeta[] {
    const fields: FieldMeta[] = [];
    for (const [key, value] of Object.entries(obj)) {
        const path = prefix ? `${prefix}.${key}` : key;
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            fields.push(...collectFields(value, path));
        } else if (typeof value === 'string') {
            if (SKIP.test(path)) continue;
            const ov = OVERRIDES[path] ?? {};
            fields.push({
                path,
                label: ov.label ?? humanize(path),
                type: ov.type ?? inferType(key, value),
                options: ov.options,
            });
        }
    }
    return fields;
}

/** Строит группы схемы из semantic пресета Aura (один раз). */
export function buildSemanticSchema(): GroupMeta[] {
    const semantic = (Aura as any).semantic as Record<string, any>;
    const groups: GroupMeta[] = [];
    const general: FieldMeta[] = [];

    for (const [key, value] of Object.entries(semantic)) {
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            const fields = collectFields(value, key);
            if (fields.length) {
                groups.push({ key, label: GROUP_LABELS[key] ?? humanize(key), fields });
            }
        } else if (typeof value === 'string') {
            // скалярные semantic-токены верхнего уровня → в общий блок
            const ov = OVERRIDES[key] ?? {};
            general.push({ path: key, label: ov.label ?? humanize(key), type: ov.type ?? inferType(key, value) });
        }
    }
    if (general.length) {
        groups.push({ key: '_general', label: 'General', fields: general });
    }
    return groups;
}

export const SEMANTIC_SCHEMA: GroupMeta[] = buildSemanticSchema();
