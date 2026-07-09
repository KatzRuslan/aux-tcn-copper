import { Injector, computed, effect, runInInjectionContext, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store as SettingsStore } from '@settings-store';
import { ConfirmationService, MessageService } from 'primeng/api';
import { signalStore, withState, withProps, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { updateState, withDevtools, withDevToolsStub } from '@angular-architects/ngrx-toolkit';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { initialAppSlice } from './app.slice';
import { changeThemeMode, initAppHelperContext, showConfirmDialog, showToastMessages } from './app.helper';
import { putActiveState } from './app.updates';
import { vmodel } from './app.vm-builder';
import { environment } from '@environments';
// import {  } from '@interfaces';

export const Store = signalStore(
	{ providedIn: 'root' },
	withState(initialAppSlice),
	withProps(_ => {
        const injector = inject(Injector);
        let settingsStore: InstanceType<typeof SettingsStore> | null = null;
		return {
			_injector: injector,
            _settingsStore: (): InstanceType<typeof SettingsStore> => {
                settingsStore ??= runInInjectionContext(injector, () => inject(SettingsStore));
                return settingsStore;
            },
		}
	}),
	withMethods(store => {
		// const _test = () => updateState(store, '[AppStore] Action', );
        return {
            showConfirmDialog, showToastMessages,
            toggleDarkMode: store._settingsStore().toggleDarkMode,
            onNavigation: (state: string, header: string, name: string) => updateState(store, '[AppStore] Put ActiveState', putActiveState(state, header, name)),
        }
    }),
	withComputed(store => {
        return {
            modeIcon: computed(() => store._settingsStore().darkMode() ? 'moon' : 'sun'),
        }
    }),
	withHooks({
		onInit(store) {
			initAppHelperContext({
				httpClient: inject(HttpClient),
                confirmationService: inject(ConfirmationService),
                messageService: inject(MessageService),
			});
            effect(() => changeThemeMode(store._settingsStore().darkMode()));
		},
	}),
	// withDevtools('app-store'),
	environment.production ? withDevToolsStub('app-store') : withDevtools('app-store'),
);
