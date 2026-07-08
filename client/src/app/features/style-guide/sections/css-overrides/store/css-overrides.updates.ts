import { PartialStateUpdater } from '@ngrx/signals';
import { ICssOverridesSlice } from './css-overrides.slice';
import { ICssOverrideItem } from '@interfaces';

export function initCssOverridesStore(overrides: ICssOverrideItem[]): PartialStateUpdater<ICssOverridesSlice> {
	return _ => ({ overrides });
};
export function putCssOverrides(overrides: ICssOverrideItem[]): PartialStateUpdater<ICssOverridesSlice> {
	return _ => ({ overrides });
};
