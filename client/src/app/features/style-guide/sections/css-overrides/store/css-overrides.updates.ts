import { PartialStateUpdater } from '@ngrx/signals';
import { ICssOverridesSlice } from './css-overrides.slice';
import { ICssOverrideItem } from '@interfaces';

export function initCssOverridesStore(overrides: Record<string, string>): PartialStateUpdater<ICssOverridesSlice> {
	return _ => ({ overrides });
};
export function putCssOverrides(overrides: Record<string, string>): PartialStateUpdater<ICssOverridesSlice> {
	return _ => ({ overrides });
};
