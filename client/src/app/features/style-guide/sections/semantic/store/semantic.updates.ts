import { PartialStateUpdater } from '@ngrx/signals';
import { ISemanticSlice } from './semantic.slice';
import { IGroupMeta } from '@interfaces';

export function initSemanticStore(schema: IGroupMeta[], custom: Record<string, string>, original: Record<string, string>): PartialStateUpdater<ISemanticSlice> {
	return _ => ({ schema, custom, original });
};
