import { Injector, inject, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signalStore, withState, withProps, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { updateState, withDevtools, withDevToolsStub } from '@angular-architects/ngrx-toolkit';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { initialBorderRadiusSlice } from './border-radius.slice';
import { initBorderRadiusHelperContext } from './border-radius.helper';
import { initBorderRadiusStore } from './border-radius.updates';
import { vmodel } from './border-radius.vm-builder';
import { environment } from '@environments';
// import {  } from '@interfaces';

export const Store = signalStore(
	{ providedIn: 'root' },
	withState(initialBorderRadiusSlice),
	withProps(_ => {
        const injector = inject(Injector);
		return {
			_injector: injector,
		}
	}),
	withMethods(store => {
		// const _test = () => updateState(store, '[BorderRadiusStore] Action', );
        return {}
    }),
	withComputed(store => {
        return {}
    }),
	withHooks({
		onInit(store) {
			initBorderRadiusHelperContext({
				httpClient: inject(HttpClient),
			})
		},
	}),
	// withDevtools('border-radius-store'),
	environment.production ? withDevToolsStub('border-radius-store') : withDevtools('border-radius-store'),
);