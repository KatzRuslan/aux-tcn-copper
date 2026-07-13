export interface IConfirmDialog {
    header: string;
    message: string;
    accept?: (...args: any) => void;
    reject?: (...args: any) => void;
    key?: string;
    acceptButtonProps?: {
        readonly label: string;
        readonly severity?: string;
        readonly outlined?: boolean;
    };
    rejectButtonProps?: {
        readonly label: string;
        readonly severity?: string;
        readonly outlined?: boolean;
    };
}
export interface IToastMessage {
    detail: string;
    life?: number;
    severity?: string;
    styleClass?: string;
}
export interface INavigationItem {
    name?: string;
    icon?: string;
    title?: string;
    label?: string;
    route?: string;
    isActive?: boolean;
    items?: INavigationItem[];
    styleClass?: string;
}
export type FieldType = 'color' | 'size' | 'rem' | 'number' | 'string' | 'select' | 'shadow';
export interface IFieldMeta {
    path: string;
    label: string;
    type: FieldType;
    styleClass?: string;
    isReadonly?: boolean;
    isVisible?: boolean;
    options?: string[];
}
export interface IGroupMeta {
    key: string;
    label: string;
    styleClass: string;
    fields: IFieldMeta[];
}
export interface INotification {
    readonly title: string;
    readonly type: string;
    readonly options?: any;
}
