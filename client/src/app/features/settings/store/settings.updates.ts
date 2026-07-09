import { PartialStateUpdater } from '@ngrx/signals';
import { ISettingsSlice } from './settings.slice';
import { ICommonSettings } from '@interfaces';

export function initSettingsStore(settings: ICommonSettings): PartialStateUpdater<ISettingsSlice> {
	return _ => ({ ...settings });
};
export function toggleDarkMode(): PartialStateUpdater<ISettingsSlice> {
	return store => ({ darkMode: !store.darkMode });
};
