import { PartialStateUpdater } from '@ngrx/signals';
import { IAzureSlice } from './azure.slice';
import { IWorkItem } from '@interfaces';
import { WorkItemType } from '@enums';

export function initAzureStore(): PartialStateUpdater<IAzureSlice> {
	return _ => ({ });
};
export function upsertWorkItems(workItems: IWorkItem[]): PartialStateUpdater<IAzureSlice> {
	return _ => ({ workItems });
};
export function putMode(mode: WorkItemType): PartialStateUpdater<IAzureSlice> {
	return _ => ({ mode });
};
