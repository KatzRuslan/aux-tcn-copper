import { PartialStateUpdater } from '@ngrx/signals';
import { IAppSlice } from './app.slice';
// import {  } from '@interfaces';

export function initAppStore(): PartialStateUpdater<IAppSlice> {
	return _ => ({ });
};
export function putActiveState(aciveState: string, aciveHeader: string, activeName: string): PartialStateUpdater<IAppSlice> {
	return _ => ({ aciveState, aciveHeader, activeName});
};
