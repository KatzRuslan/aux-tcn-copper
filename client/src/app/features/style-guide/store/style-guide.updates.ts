import { PartialStateUpdater } from '@ngrx/signals';
import { IStyleGuideSlice } from './style-guide.slice';
// import {  } from '@interfaces';

export function initStyleGuideStore(): PartialStateUpdater<IStyleGuideSlice> {
	return _ => ({ });
};
export function putShowDrawer(showDrawer: boolean): PartialStateUpdater<IStyleGuideSlice> {
	return _ => ({ showDrawer });
};
