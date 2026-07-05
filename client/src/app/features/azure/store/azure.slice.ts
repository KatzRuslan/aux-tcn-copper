import { WorkItemType } from '@enums';
import { IWorkItem } from '@interfaces';
export interface IAzureSlice {
    readonly url: string;
    readonly workItems: IWorkItem[];
    readonly mode: WorkItemType;
};

export const initialAzureSlice: IAzureSlice = {
    url: 'https://ilsvtfs02.brainlab.net/tfs/VoyantHealth/Development/_workitems?__rt=fps',
    workItems: [],
    mode: WorkItemType.TASK
};
