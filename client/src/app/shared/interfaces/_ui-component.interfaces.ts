import { IGroupMeta, ICssOverrideItem } from '@interfaces';

export interface IUiComponentScheme {
        readonly name: string;
        readonly data: IGroupMeta[];
}
export interface IUiComponentSet {
    readonly name: string;
    readonly data: Record<string, string>;
    readonly css: ICssOverrideItem[];
}
