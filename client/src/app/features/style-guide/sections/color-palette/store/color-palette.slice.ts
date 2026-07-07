import { IPalette } from '@interfaces';
export interface IColorPaletteSlice {
    readonly steps: number[];
    readonly palettes: IPalette[];
    readonly searchColor: string;
    readonly customPalettesOnly: boolean;
};

export const initialColorPaletteSlice: IColorPaletteSlice = {
    steps: [],
    palettes: [],
    searchColor: '', //#dc2625
    customPalettesOnly: false,
};
