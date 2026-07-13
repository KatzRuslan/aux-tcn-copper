import { Injector, computed, effect, runInInjectionContext, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store as SettingsStore } from '@settings-store';
import { Store as StyleGuidStore } from '@style-guide-store';
import { ConfirmationService, MessageService } from 'primeng/api';
import { signalStore, withState, withProps, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { updateState, withDevtools, withDevToolsStub } from '@angular-architects/ngrx-toolkit';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { initialAppSlice } from './app.slice';
import { changeThemeMode, initAppHelperContext, showConfirmDialog, showToastMessages } from './app.helper';
import { putActiveState, putNotifications } from './app.updates';
import { vmodel } from './app.vm-builder';
import { environment } from '@environments';
import { INotification } from '@interfaces';
// import {  } from '@interfaces';

export const Store = signalStore(
	{ providedIn: 'root' },
	withState(initialAppSlice),
	withProps(_ => {
        const injector = inject(Injector);
        let settingsStore: InstanceType<typeof SettingsStore> | null = null;
		let styleGuidStore: InstanceType<typeof StyleGuidStore> | null = null;
		return {
			_injector: injector,
            _settingsStore: (): InstanceType<typeof SettingsStore> => {
                settingsStore ??= runInInjectionContext(injector, () => inject(SettingsStore));
                return settingsStore;
            },
            _styleGuidStore: (): InstanceType<typeof StyleGuidStore> => {
                styleGuidStore ??= runInInjectionContext(injector, () => inject(StyleGuidStore));
                return styleGuidStore;
            },
		}
	}),
	withMethods(store => {
		// const _test = () => updateState(store, '[AppStore] Action', );
        return {
            showConfirmDialog, showToastMessages,
            toggleDarkMode: store._settingsStore().toggleDarkMode,
            toggleBookmark: store._settingsStore().toggleBookmark,
            toggleAvailableComponent: store._settingsStore().toggleAvailableComponent,
            onNavigation: (state: string, header: string, name: string) => updateState(store, '[AppStore] Put ActiveState', putActiveState(state, header, name)),
            putNotifications: (notifications: INotification[]) => updateState(store, '[AppStore] Put Notifications', putNotifications(notifications)),
            approveNotification: (notification: INotification) => { console.log(notification)
                updateState(
                    store, '[AppStore] Put Notifications', putNotifications(
                        store.notifications().filter(({ type }) => type !== notification.type)
                ));
                switch (notification.type) {
                    case '':
                        //-
                        break;
                    case 'unsaved':
                        store._styleGuidStore().savePreset(notification.options)
                        break;
                }
            },
        }
    }),
	withComputed(store => {
        return {
            modeIcon: computed(() => store._settingsStore().darkMode() ? 'moon' : 'sun'),
            bookmarks: computed(() => store._settingsStore().searcherBookmarks()),
            availableComponents: computed(() => store._settingsStore().availableComponents()),
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
