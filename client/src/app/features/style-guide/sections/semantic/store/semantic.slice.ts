import { IGroupMeta } from '@interfaces';
export interface ISemanticSlice {
    readonly schema: IGroupMeta[];
    readonly custom: Record<string, string>
    readonly original: Record<string, string>
};;

export const initialSemanticSlice: ISemanticSlice = {
    schema: [],
    custom: {},
    original: {},
};
