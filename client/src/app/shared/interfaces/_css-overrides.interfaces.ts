export interface ICssOverridePropertyItem {
    readonly name: string;
    readonly value: string;
}
export interface ICssOverrideItem {
    readonly selector: string;
    readonly properties: ICssOverridePropertyItem[];
}
export interface ICssValueGroup {
    readonly properties: string[];
    readonly values: string[];
}
