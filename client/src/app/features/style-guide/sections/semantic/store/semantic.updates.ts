import { PartialStateUpdater } from '@ngrx/signals';
import { ISemanticSlice } from './semantic.slice';
import { IGroupMeta } from '@interfaces';

export function initSemanticStore(schema: IGroupMeta[], semantic: Record<string, string>): PartialStateUpdater<ISemanticSlice> {
	return _ => ({ schema, semantic });
};
