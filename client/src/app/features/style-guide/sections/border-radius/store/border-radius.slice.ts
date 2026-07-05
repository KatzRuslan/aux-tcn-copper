import { IFieldMeta } from '@interfaces';
export interface IBorderRadiusSlice {
    readonly schema: IFieldMeta[];
    readonly custom: Record<string, string>
    readonly original: Record<string, string>
};

export const initialBorderRadiusSlice: IBorderRadiusSlice = {
    schema: [],
    custom: {},
    original: {},
};
