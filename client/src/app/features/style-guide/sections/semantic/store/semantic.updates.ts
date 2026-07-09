import { PartialStateUpdater } from '@ngrx/signals';
import { ISemanticSlice } from './semantic.slice';
import { IGroupMeta } from '@interfaces';

export function initSemanticStore(scheme: IGroupMeta[], semantic: Record<string, string>): PartialStateUpdater<ISemanticSlice> {
	return _ => ({ scheme, semantic });
};
export function putSemantic(semantic: Record<string, string>): PartialStateUpdater<ISemanticSlice> {
	return _ => ({ semantic });
};
