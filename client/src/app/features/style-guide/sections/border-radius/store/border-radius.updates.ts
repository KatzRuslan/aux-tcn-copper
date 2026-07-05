import { PartialStateUpdater } from '@ngrx/signals';
import { IBorderRadiusSlice } from './border-radius.slice';
import { IFieldMeta } from '@interfaces';

export function initBorderRadiusStore(schema: IFieldMeta[], custom: Record<string, string>, original: Record<string, string>): PartialStateUpdater<IBorderRadiusSlice> {
	return _ => ({ schema, custom, original });
}
export function putCustom(custom: Record<string, string>): PartialStateUpdater<IBorderRadiusSlice> {
    return _ => ({ custom });
}
