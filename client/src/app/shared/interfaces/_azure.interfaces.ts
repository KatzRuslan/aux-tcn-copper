import { WorkItemType } from '@enums';

export interface IWorkItem {
    readonly id: number;
    readonly type: WorkItemType;
    readonly title: string;
}
