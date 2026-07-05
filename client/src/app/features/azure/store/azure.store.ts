import { Injector, computed, runInInjectionContext, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//
import { Store as AppStore } from '@app-store';
//
import { signalStore, withState, withProps, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { updateState, withDevtools, withDevToolsStub } from '@angular-architects/ngrx-toolkit';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { initialAzureSlice } from './azure.slice';
import { getWorkItems, initAzureHelperContext } from './azure.helper';
import { initAzureStore, upsertWorkItems, putMode } from './azure.updates';
import { vmWorkItems } from './azure.vm-builder';
import { environment } from '@environments';
import { from, pipe, switchMap } from 'rxjs';
import { WorkItemType } from '@enums';
import {  } from '@interfaces';

export const Store = signalStore(
	{ providedIn: 'root' },
	withState(initialAzureSlice),
	withProps(_ => {
        const injector = inject(Injector);
		let appStore: InstanceType<typeof AppStore> | null = null;
		return {
			_injector: injector,
            _appStore: (): any => {
                appStore ??= runInInjectionContext(injector, () => inject(AppStore));
                return appStore;
            },
		}
	}),
	withMethods(store => {
		// const _test = () => updateState(store, '[AzureStore] Action', );
        return {
            getWorkItems: rxMethod<string>(
                pipe(
                    switchMap(
                        input$ => from(getWorkItems(input$)).pipe(
                            tapResponse({
                                next: workitems => updateState(store, '[AzureStore] Upsert WorkItems', upsertWorkItems(workitems)),
                                error: ({ header, message}) => {
                                    // store._appStore().showConfirmDialog({
                                    //     header, message,
                                    //     rejectButtonProps: { }
                                    // });
                                    store._appStore().showToastMessages([{
                                        detail: message, severity: 'error'
                                    }]);
                                },
                            })
                        )
                    )
                )
            ),
            putMode: (mode: WorkItemType) => updateState(store, '[AzureStore] Put Mode', putMode(mode)),
        }
    }),
	withComputed(store => {
        return {
            vmWorkItems: computed(() => vmWorkItems(store.workItems())),
        }
    }),
	withHooks({
		onInit(store) {
			initAzureHelperContext({
				httpClient: inject(HttpClient),
			});
            store.getWorkItems(store.url);
		},
	}),
	// withDevtools('azure-store'),
	environment.production ? withDevToolsStub('azure-store') : withDevtools('azure-store'),
);
