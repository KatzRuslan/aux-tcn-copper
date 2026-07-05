import { WorkItemNames, WorkItemType } from '@enums';
import { IWorkItem } from '@interfaces';

export function vmWorkItems(workItems: IWorkItem[]) {
	return {
        bugs: workItems.filter(({ type }) => type === WorkItemType.BUG).map(({ id, title }) => `${id} - ${title}`),
        requirements: workItems.filter(({ type }) => type === WorkItemType.REQUIREMENT).map(({ id, title }) => `${id} - ${title}`),
        tasks: workItems.filter(({ type }) => type === WorkItemType.TASK).map(({ id, title }) => `${id} - ${title}`),
        options: [
            { value: WorkItemType.TASK, label: WorkItemNames.get(WorkItemType.TASK) },
            { value: WorkItemType.BUG, label: WorkItemNames.get(WorkItemType.BUG) },
        ]
    };
}
