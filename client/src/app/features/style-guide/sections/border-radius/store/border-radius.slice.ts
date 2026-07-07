import { IFieldMeta } from '@interfaces';
export interface IBorderRadiusSlice {
    readonly scheme: IFieldMeta[];
    readonly borderRadius: Record<string, string>;
};

export const initialBorderRadiusSlice: IBorderRadiusSlice = {
    scheme: [],
    borderRadius: {},
};
