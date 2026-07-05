import { IPalette } from '@interfaces';

export function vmColorPalettes(palettes: IPalette[], steps: number[], search: string, customPalettesOnly: boolean): { steps: number[], customPalettesOnly: boolean, palettes: IPalette[] } {
    return {
        steps, customPalettesOnly,
        palettes: palettes.map(palette => ({
            ...palette,
            colors: palette.colors.map(node => ({ ...node, active: node.color === search }))
        }))
    }
}
export function vmRightHeader(search: string, customPalettesOnly: boolean, disabled: boolean) {
    return {
        search, customPalettesOnly,
        addColorDisabled: disabled
    };
}

