import { PartialStateUpdater } from '@ngrx/signals';
import { IBorderRadiusSlice } from './border-radius.slice';
import { IFieldMeta } from '@interfaces';

export function initBorderRadiusStore(scheme: IFieldMeta[], borderRadius: Record<string, string>): PartialStateUpdater<IBorderRadiusSlice> {
	return _ => ({ scheme, borderRadius });
}
export function putBorderRadius(borderRadius: Record<string, string>): PartialStateUpdater<IBorderRadiusSlice> {
    return _ => ({ borderRadius });
}
