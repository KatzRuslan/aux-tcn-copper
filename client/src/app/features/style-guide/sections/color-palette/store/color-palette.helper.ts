import { Signal } from '@angular/core';
import { $dt } from '@primeuix/themes';
import chroma from 'chroma-js';
import { from, map } from 'rxjs';
import { IPalette } from '@interfaces';

/**
 * ⚠️ Singleton helper context.
 *
 * Initialized once from ColorPaletteStore `onInit`.
 * Assumes a single ColorPaletteStore instance and
 * that initialization happens before any usage.
 *
 * Not intended for SSR or multiple store instances.
 */

interface IContext {
    readonly steps: Signal<number[]>,
    readonly baseColorNames: Signal<string[]>,
    readonly palettes: Signal<IPalette[]>,
}
let ctx!: IContext;
export function initColorPaletteHelperContext(context: IContext) {
    ctx = context;
}
//
function getPrimePalette(): IPalette[] {
    return ctx.baseColorNames().map(colorName => {
        const label = `${colorName.charAt(0).toUpperCase()}${colorName.slice(1)}`;
        return {
            name: colorName, label, custom: false,
            colors: ctx.steps().map(step => {
                const { name, value } = $dt(`${colorName}.${step}`)
                return {
                    color: `${value}`, token: name, step
                };
            })
        };
    })
}
export function getPalette() {
    return from(globalThis.runElectronCommand<IPalette[]>('read-data', { target: 'color-palette' })).pipe(
        map(custom => ([...getPrimePalette(), ...(custom ?? [])]))
    );
}
function isValidColor(color: string) {
    return /^#([0-9A-Fa-f]{6})$/.test(color);
}
export function checkColor(color: string, palettes: IPalette[]) {
    if (!color) { return false; }
    if (palettes.flatMap(({ colors }) => colors.map(({ color }) => color)).includes(color)) { return false; }
    return isValidColor(color);
}
const lightnessSteps: Record<string, number> = {
    '50': 97, '100': 93, '200': 85,
    '300': 72, '400': 58, '500': 45,
    '600': 36, '700': 26, '800': 18,
    '900': 11, '950': 5
};
const chromaScales: Record<string, number> = {
    '50': 0.25, '100': 0.35, '200': 0.55,
    '300': 0.75, '400': 0.90, '500': 1.0,
    '600': 1.05, '700': 1.1, '800': 1.1,
    '900': 1.05, '950': 1.0
};
const white = chroma('#ffffff');
const black = chroma('#000000');

function isPureColor(hex: string): boolean {
    const [r,g,b] = chroma(hex).rgb();
    return (r===255 && g===0 && b===0) ||
        (r===0 && g===255 && b===0) ||
        (r===0 && g===0 && b===255);
}
function generatePurePalette(hex: string): Record<string, string> {
    const out: Record<string, string> = {};
    const baseIndex = 5;
    const base = chroma(hex);
    out['500'] = hex;
    ctx.steps().forEach((step, i) => {
        if (i === baseIndex) return;
        if (i < baseIndex) {
            const t = Math.min((baseIndex - i) / baseIndex, 0.9);
            out[step] = chroma.mix(base, white, t, 'rgb').hex();
        } else {
            const t = Math.min((i - baseIndex) / (ctx.steps().length - 1 - baseIndex), 0.9);
            out[step] = chroma.mix(base, black, t, 'rgb').hex();
        }
    });
    return out;
}
function generateLchPalette(hex: string): Record<string, string> {
    const [baseL, baseC, baseH] = chroma(hex).lch();
    let closestStep = '500';
    let minDiff = Infinity;
    for (const [step,L] of Object.entries(lightnessSteps)) {
        const diff = Math.abs(L - baseL);
        if (diff < minDiff) { minDiff = diff; closestStep = step; }
    }
    const out: Record<string, string> = {};
    out[closestStep] = hex;
    for (const step of Object.keys(lightnessSteps)) {
        if (step === closestStep) continue;
        const targetL = lightnessSteps[step];
        const scale = chromaScales[step];
        const targetC = Math.max(6, baseC*scale);
        try {
            out[step] = chroma.lch(targetL, targetC, baseH).hex();
        } catch {
            out[step] = chroma.lch(targetL, Math.max(6,targetC*0.8), baseH).hex();
        }
    }
    const sorted: Record<string, string> = {};
    Object.keys(lightnessSteps).forEach(k=>sorted[k]=out[k]);
    return sorted;
}
export function getCustomPalette(hex: string): IPalette {
    const norm = hex.startsWith('#') ? hex : `#${hex}`;
    const colors: any = Object.entries(isPureColor(norm) ? generatePurePalette(norm) : generateLchPalette(norm)).map(([step, color]) => ({ step, color, token: '' }));
    return {
        name: '', label: '', colors, custom: true,
    };
};
export function electronWritePalettes() {
    runElectronCommand('write-data', { target: 'color-palette', data: ctx.palettes().filter(({ custom }) => custom), reload: false });
}
