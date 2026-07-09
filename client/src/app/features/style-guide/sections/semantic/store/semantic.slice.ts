import { IGroupMeta } from '@interfaces';
export interface ISemanticSlice {
    readonly scheme: IGroupMeta[];
    readonly semantic: Record<string, string>;
};

export const initialSemanticSlice: ISemanticSlice = {
    scheme: [],
    semantic: {},
};
