import { ICssOverrideItem } from '@interfaces';

export interface ICssOverridesSlice {
    readonly overrides: Record<string, string>;
};

export const initialCssOverridesSlice: ICssOverridesSlice = {
    overrides: {},
};
