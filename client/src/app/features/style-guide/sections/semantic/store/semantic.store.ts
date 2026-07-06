import { Injector, computed, runInInjectionContext, inject } from '@angular/core';
import { signalStore, withState, withProps, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { Store as StyleGuidStore } from '@style-guide-store';
import { updateState, withDevtools, withDevToolsStub } from '@angular-architects/ngrx-toolkit';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { initialSemanticSlice } from './semantic.slice';
import { initSemanticHelperContext, getSemantic, createSemantic } from './semantic.helper';
import { initSemanticStore } from './semantic.updates';
import { vmodel } from './semantic.vm-builder';
import { environment } from '@environments';
import { pipe, switchMap } from 'rxjs';
import { IGroupMeta } from '@interfaces';

export const Store = signalStore(
	{ providedIn: 'root' },
	withState(initialSemanticSlice),
	withProps(_ => {
        const injector = inject(Injector);
		let styleGuidStore: InstanceType<typeof StyleGuidStore> | null = null;
		return {
			_injector: injector,
            _styleGuidStore: (): InstanceType<typeof StyleGuidStore> => {
                styleGuidStore ??= runInInjectionContext(injector, () => inject(StyleGuidStore));
                return styleGuidStore;
            },
		}
	}),
	withMethods(store => {
		//- const _test = () => updateState(store, '[SemanticStore] Action', );
        return {
            initStore: rxMethod<IGroupMeta[]>(
                pipe(
                    switchMap(input$ =>
                        getSemantic().pipe(
                            tapResponse({
                                next: ({ custom, original }) => updateState(store, '[SemanticStore] Init Store', initSemanticStore(input$, custom, original)),
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
            semantic: computed(() => createSemantic())
        }
    }),
	withHooks({
		onInit(store) {
			initSemanticHelperContext({
                custom: computed(() => store.custom()),
                original: computed(() => store.original()),
                colorSteps: computed(() => store._styleGuidStore().colorSteps())
				// httpClient: inject(HttpClient),
			})
		},
	}),
	// withDevtools('semantic-store'),
	environment.production ? withDevToolsStub('semantic-store') : withDevtools('semantic-store'),
);
