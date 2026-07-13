import { Injector, computed, runInInjectionContext, inject } from '@angular/core';
import { signalStore, withState, withProps, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { Store as StyleGuidStore } from '@style-guide-store';
import { updateState, withDevtools, withDevToolsStub } from '@angular-architects/ngrx-toolkit';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { initialSemanticSlice } from './semantic.slice';
import { initSemanticHelperContext, initSemantis, createSemantic, electronWriteSemantic } from './semantic.helper';
import { initSemanticStore, putSemantic } from './semantic.updates';
import { vmodel } from './semantic.vm-builder';
import { environment } from '@environments';
import { pipe, switchMap } from 'rxjs';

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
            initStore: rxMethod<void>(
                pipe(
                    switchMap(_ =>
                        initSemantis().pipe(
                            tapResponse({
                                next: ({ scheme, semantic }) => updateState(store, '[SemanticStore] Init Store', initSemanticStore(scheme, semantic)),
                                error: err => console.error(err),
                            })
                        )
                    )
                ),
                { injector: store._injector }
            ),
            putSemantic: (semantic: Record<string, string>) => {
                updateState(store, '[SemanticStore] Put Semantic', putSemantic(semantic));
                electronWriteSemantic();
                store._styleGuidStore().createPreset();
            },
            applyPreset: (semantic: Record<string, string>) => {
                updateState(store, '[SemanticStore] Put Semantic', putSemantic(semantic));
                // electronWriteSemantic();
                store._styleGuidStore().applyPreset();
            },
            electronWriteSemantic,
        }
    }),
	withComputed(store => {
        return {
            getSemantic: computed(() => createSemantic())
        }
    }),
	withHooks({
		onInit(store) {
			initSemanticHelperContext({
                semantic: computed(() => store.semantic()),
                colorSteps: computed(() => store._styleGuidStore().colorSteps()),
			});
		},
	}),
	// withDevtools('semantic-store'),
	environment.production ? withDevToolsStub('semantic-store') : withDevtools('semantic-store'),
);
