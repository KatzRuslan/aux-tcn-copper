import { PartialStateUpdater } from '@ngrx/signals';
import { IStyleGuideSlice } from './style-guide.slice';
// import {  } from '@interfaces';

export function initStyleGuideStore(): PartialStateUpdater<IStyleGuideSlice> {
	return _ => ({ });
};