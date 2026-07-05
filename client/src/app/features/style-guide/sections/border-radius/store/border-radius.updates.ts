import { PartialStateUpdater } from '@ngrx/signals';
import { IBorderRadiusSlice } from './border-radius.slice';
// import {  } from '@interfaces';

export function initBorderRadiusStore(): PartialStateUpdater<IBorderRadiusSlice> {
	return _ => ({ });
};