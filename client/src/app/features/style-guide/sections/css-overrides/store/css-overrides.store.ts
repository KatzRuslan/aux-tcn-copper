import { Injector, computed, runInInjectionContext, inject } from '@angular/core';
import { signalStore, withState, withProps, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { Store as StyleGuidStore } from '@style-guide-store';
import { updateState, withDevtools, withDevToolsStub } from '@angular-architects/ngrx-toolkit';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { initialCssOverridesSlice } from './css-overrides.slice';
import { createCssOverrides, electronWriteCssOverrides, initCssOverrides, initCssOverridesHelperContext } from './css-overrides.helper';
import { initCssOverridesStore, putCssOverrides } from './css-overrides.updates';
import { vmodel } from './css-overrides.vm-builder';
import { environment } from '@environments';
import { pipe, switchMap } from 'rxjs';
import { ICssOverrideItem } from '@interfaces';

export const Store = signalStore(
	{ providedIn: 'root' },
	withState(initialCssOverridesSlice),
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
		// const _test = () => updateState(store, '[CssOverridesStore] Action', );
        return {
            initStore: rxMethod<void>(
                pipe(
                    switchMap(_ =>
                        initCssOverrides().pipe(
                            tapResponse({
                                next: overrides => updateState(store, '[CssOverridesStore] Init Store', initCssOverridesStore(overrides)),
                                error: err => console.error(err),
                            })
                        )
                    )
                ),
                { injector: store._injector }
            ),
            // putCssOverrides: (overrides: ICssOverrideItem[]) => {
            //     updateState(store, '[CssOverridesStore] Put CssOverrides', putCssOverrides(overrides));
            //     // electronWriteCssOverrides();
            //     store._styleGuidStore().createPreset();
            // },
            testCssOverrides: (overrides: any) => {
                console.log(overrides)
            },
            applyPreset: (overrides: ICssOverrideItem[]) => {
                updateState(store, '[CssOverridesStore] Put CssOverrides', putCssOverrides(overrides));
                // electronWriteCssOverrides();
                store._styleGuidStore().applyPreset();
            },
            electronWriteCssOverrides,
        }
    }),
	withComputed(store => {
        return {
            getCssOverrides: computed(() => createCssOverrides()),
        }
    }),
	withHooks({
		onInit(store) {
			initCssOverridesHelperContext({
				overrides: computed(() => store.overrides()),
                palettes: computed(() => store._styleGuidStore().palettes()),
			})
		},
	}),
	// withDevtools('css-overrides-store'),
	environment.production ? withDevToolsStub('css-overrides-store') : withDevtools('css-overrides-store'),
);
