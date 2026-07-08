export interface ICssOverridePropertyItem {
    readonly name: string;
    readonly value: string | number | any;
    readonly path: string;
}
export interface ICssOverrideItem {
    readonly selector: string;
    readonly properties: ICssOverridePropertyItem[];
}
export interface ICssValueGroup {
    readonly properties: string[];
    readonly values: string[];
}
