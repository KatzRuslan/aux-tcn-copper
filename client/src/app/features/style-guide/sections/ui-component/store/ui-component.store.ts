import { Injector, computed, runInInjectionContext, inject } from '@angular/core';
import { signalStore, withState, withProps, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { Store as AppStore } from '@app-store';
import { Store as StyleGuidStore } from '@style-guide-store';
import { updateState, withDevtools, withDevToolsStub } from '@angular-architects/ngrx-toolkit';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { initialUiComponentSlice } from './ui-component.slice';
import { initUiComponentHelperContext, initUiComponent, createUiComponent } from './ui-component.helper';
import { initUiComponentStore } from './ui-component.updates';
import { vmodel } from './ui-component.vm-builder';
import { environment } from '@environments';
import { pipe, switchMap } from 'rxjs';
// import {  } from '@interfaces';

export const Store = signalStore(
	{ providedIn: 'root' },
	withState(initialUiComponentSlice),
	withProps(_ => {
        const injector = inject(Injector);
		let appStore: InstanceType<typeof AppStore> | null = null;
		let styleGuidStore: InstanceType<typeof StyleGuidStore> | null = null;
		return {
			_injector: injector,
            _styleGuidStore: (): InstanceType<typeof StyleGuidStore> => {
                styleGuidStore ??= runInInjectionContext(injector, () => inject(StyleGuidStore));
                return styleGuidStore;
            },
            _appStore: (): InstanceType<typeof AppStore> => {
                appStore ??= runInInjectionContext(injector, () => inject(AppStore));
                return appStore;
            },
		}
	}),
	withMethods(store => {
		// const _test = () => updateState(store, '[UiComponentStore] Action', );
        return {
            initStore: rxMethod<void>(
                pipe(
                    switchMap(_ =>
                        initUiComponent().pipe(
                            tapResponse({
                                next: ({ schemes, components }) => updateState(store, '[UiComponentStore] Init Store', initUiComponentStore(schemes, components)),
                                error: err => console.error(err),
                            })
                        )
                    )
                ),
                { injector: store._injector }
            ),
        }
    }),
	withComputed(store => {
        return {
            vmodel: computed(() => vmodel(store._appStore().aciveState(), store._appStore().activeName(), store.components(), store.schemes())),
            getComponents: computed(() => createUiComponent()),
        }
    }),
	withHooks({
		onInit(store) {
			initUiComponentHelperContext({
                components: computed(() => store.components())
			})
		},
	}),
	// withDevtools('ui-component-store'),
	environment.production ? withDevToolsStub('ui-component-store') : withDevtools('ui-component-store'),
);
