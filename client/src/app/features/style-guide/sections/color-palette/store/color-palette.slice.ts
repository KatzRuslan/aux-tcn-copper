import { IPalette } from '@interfaces';
export interface IColorPaletteSlice {
    readonly steps: number[];
    readonly baseColorNames: string[];
    readonly palettes: IPalette[];
    readonly searchColor: string;
    readonly customPalettesOnly: boolean;
};

export const initialColorPaletteSlice: IColorPaletteSlice = {
    steps: [],
    baseColorNames: [],
    palettes: [],
    searchColor: '', //#dc2625
    customPalettesOnly: false,
};
