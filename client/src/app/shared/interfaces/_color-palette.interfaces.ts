export interface IPalette {
    readonly name: string;
    readonly label: string;
    readonly colors: IPaletteColor[];
    readonly custom: boolean;
};
export interface IPaletteColor {
    readonly color: string;
    readonly token: string;
    readonly step: number;
    readonly active?: boolean;
};
