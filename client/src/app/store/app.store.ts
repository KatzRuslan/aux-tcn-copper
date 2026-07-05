import { Injector, inject, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import { signalStore, withState, withProps, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { updateState, withDevtools, withDevToolsStub } from '@angular-architects/ngrx-toolkit';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { initialAppSlice } from './app.slice';
import { initAppHelperContext, showConfirmDialog, showToastMessages } from './app.helper';
import { putActiveState } from './app.updates';
import { vmodel } from './app.vm-builder';
import { environment } from '@environments';
// import {  } from '@interfaces';

export const Store = signalStore(
	{ providedIn: 'root' },
	withState(initialAppSlice),
	withProps(_ => {
        const injector = inject(Injector);
		return {
			_injector: injector,
		}
	}),
	withMethods(store => {
		// const _test = () => updateState(store, '[AppStore] Action', );
        return {
            showConfirmDialog, showToastMessages,
            onNavigation: (state: string, header: string, name: string) => updateState(store, '[AppStore] Put ActiveState', putActiveState(state, header, name)),
        }
    }),
	withComputed(store => {
        return {}
    }),
	withHooks({
		onInit(store) {
			initAppHelperContext({
				httpClient: inject(HttpClient),
                confirmationService: inject(ConfirmationService),
                messageService: inject(MessageService),
			})
		},
	}),
	// withDevtools('app-store'),
	environment.production ? withDevToolsStub('app-store') : withDevtools('app-store'),
);
