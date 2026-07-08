import { ICssOverrideItem } from '@interfaces';

export interface ICssOverridesSlice {
    readonly overrides: ICssOverrideItem[];
};

export const initialCssOverridesSlice: ICssOverridesSlice = {
    overrides: [],
};
