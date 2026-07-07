import { IGroupMeta } from '@interfaces';
export interface ISemanticSlice {
    readonly schema: IGroupMeta[];
    readonly semantic: Record<string, string>
};;

export const initialSemanticSlice: ISemanticSlice = {
    schema: [],
    semantic: {},
};
