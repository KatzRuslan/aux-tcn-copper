import { PartialStateUpdater } from '@ngrx/signals';
import { IColorPaletteSlice } from './color-palette.slice';
import { IPalette } from '@interfaces';

export function initStore(steps: number[], baseColorNames: string[]): PartialStateUpdater<IColorPaletteSlice> {
    return _ => ({ steps, baseColorNames });
}
export function initPalettes(palettes: IPalette[]): PartialStateUpdater<IColorPaletteSlice> {
    return _ => ({ palettes });
};
export function toogleCustomPalettesOnly(): PartialStateUpdater<IColorPaletteSlice> {
	return store => ({ customPalettesOnly: !store.customPalettesOnly });
};
export function updateSearchColor(searchColor: string): PartialStateUpdater<IColorPaletteSlice> {
	return _ => ({ searchColor });
}
export function pushPalette(palette: IPalette): PartialStateUpdater<IColorPaletteSlice> {
	return store => ({ palettes: [...store.palettes, palette] });
}
export function putPalette(name: string, palette: IPalette): PartialStateUpdater<IColorPaletteSlice> {
	return store => ({ palettes: store.palettes.map(node => name === node.name ? palette : node) });
}
export function deletePalette(name: string): PartialStateUpdater<IColorPaletteSlice> {
	return store => ({ palettes: store.palettes.filter(node => name !== node.name) });
}
