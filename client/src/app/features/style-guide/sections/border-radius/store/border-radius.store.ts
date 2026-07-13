import { Injector, computed, runInInjectionContext, inject } from '@angular/core';
import { signalStore, withState, withProps, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { Store as StyleGuidStore } from '@style-guide-store';
import { updateState, withDevtools, withDevToolsStub } from '@angular-architects/ngrx-toolkit';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { initialBorderRadiusSlice } from './border-radius.slice';
import { createBorderRadius, electronWriteBorderRadius, initBorderRadius, initBorderRadiusHelperContext } from './border-radius.helper';
import { initBorderRadiusStore, putBorderRadius } from './border-radius.updates';
import { environment } from '@environments';
import { pipe, switchMap } from 'rxjs';

export const Store = signalStore(
	{ providedIn: 'root' },
	withState(initialBorderRadiusSlice),
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
		//- const _test = () => updateState(store, '[BorderRadiusStore] Action', );
        return {
            initStore: rxMethod<void>(
                pipe(
                    switchMap(_ =>
                        initBorderRadius().pipe(
                            tapResponse({
                                next: ({ scheme, borderRadius }) => updateState(store, '[BorderRadiusStore] Init Store', initBorderRadiusStore(scheme, borderRadius)),
                                error: err => console.error(err),
                            })
                        )
                    )
                ),
                { injector: store._injector }
            ),
            putBorderRadius: (borderRadius: Record<string, string>) => {
                updateState(store, '[BorderRadiusStore] Put Custom Border Radius', putBorderRadius(borderRadius));
                // electronWriteBorderRadius();
                store._styleGuidStore().applyPreset();
            },
            electronWriteBorderRadius,
        }
    }),
	withComputed(store => {
        return {
            getBorderRadius: computed(() => createBorderRadius())
            // vmodel: computed(() => vmodel())
        }
    }),
	withHooks({
		onInit(store) {
			initBorderRadiusHelperContext({
				borderRadius: computed(() => store.borderRadius()),
			});
		},
	}),
	// withDevtools('border-radius-store'),
	environment.production ? withDevToolsStub('border-radius-store') : withDevtools('border-radius-store'),
);
