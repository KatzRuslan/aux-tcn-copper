import { Injector, inject, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signalStore, withState, withProps, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { updateState, withDevtools, withDevToolsStub } from '@angular-architects/ngrx-toolkit';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { initialSettingsSlice } from './settings.slice';
import { electronWriteSettings, initSettingsHelperContext, toggleAvailableComponent, toggleBookmark } from './settings.helper';
import { initSettingsStore, putAvailableComponents, putBookmarks, toggleDarkMode } from './settings.updates';
import { vmodel } from './settings.vm-builder';
import { environment } from '@environments';
import { ICommonSettings } from '@interfaces';
// import {  } from '@interfaces';

export const Store = signalStore(
	{ providedIn: 'root' },
	withState(initialSettingsSlice),
	withProps(_ => {
        const injector = inject(Injector);
		return {
			_injector: injector,
		}
	}),
	withMethods(store => {
		// const _test = () => updateState(store, '[SettingsStore] Action', );
        return {
            initStore: (settings: ICommonSettings) => updateState(store, '[SettingsStore] Init Store', initSettingsStore(settings)),
            toggleDarkMode: () => {
                updateState(store, '[SettingsStore] Init Store', toggleDarkMode());
                electronWriteSettings();
            },
            toggleBookmark: (component: string) => {
                updateState(store, '[SettingsStore] Put SearcherBookmarks', putBookmarks(toggleBookmark(component)));
                electronWriteSettings();
            },
            toggleAvailableComponent: (component: string) => {
                const { availableComponents, searcherBookmarks } = toggleAvailableComponent(component);
                updateState(store, '[SettingsStore] Put AvailableComponents/SearcherBookmarks', putAvailableComponents(availableComponents), putBookmarks(searcherBookmarks));
                electronWriteSettings();
            },
        }
    }),
	withComputed(store => {
        return {}
    }),
	withHooks({
		onInit(store) {
			initSettingsHelperContext({
				httpClient: inject(HttpClient),
                settings: computed(() => ({
                    colorIdenifier: store.colorIdenifier(),
                    textFramingSpaces: store.textFramingSpaces(),
                    tokenUri: store.tokenUri(),
                    darkMode: store.darkMode(),
                    searcherBookmarks: store.searcherBookmarks(),
                    availableComponents: store.availableComponents()
                })),
			})
		},
	}),
	// withDevtools('settings-store'),
	environment.production ? withDevToolsStub('settings-store') : withDevtools('settings-store'),
);
