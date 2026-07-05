import { Injector, computed, runInInjectionContext, inject } from '@angular/core';
import { signalStore, withState, withProps, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { Store as StyleGuidStore } from '@style-guide-store';
import { updateState, withDevtools, withDevToolsStub } from '@angular-architects/ngrx-toolkit';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { initialBorderRadiusSlice } from './border-radius.slice';
import { electronWriteBorderRadius, getBorderRadius, initBorderRadiusHelperContext } from './border-radius.helper';
import { initBorderRadiusStore, putCustom } from './border-radius.updates';
import { vmodel } from './border-radius.vm-builder';
import { environment } from '@environments';
import { pipe, switchMap } from 'rxjs';
import { IFieldMeta } from '@interfaces';

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
            initStore: rxMethod<IFieldMeta[]>(
                pipe(
                    switchMap(input$ =>
                        getBorderRadius().pipe(
                            tapResponse({
                                next: ({ custom, original }) => updateState(store, '[BorderRadiusStore] Init Store', initBorderRadiusStore(input$, custom, original)),
                                error: err => console.error(err),
                            })
                        )
                    )
                ),
                { injector: store._injector }
            ),
            putBorderRadius: (custom: Record<string, string>) => {
                updateState(store, '[BorderRadiusStore] Put Custom Border Radius', putCustom(custom));
                electronWriteBorderRadius();
                store._styleGuidStore().createPreset();
            }
        }
    }),
	withComputed(store => {
        return {
            // vmodel: computed(() => vmodel())
        }
    }),
	withHooks({
		onInit(store) {
			initBorderRadiusHelperContext({
				borderRadius: computed(() => ({ custom: store.custom(), original: store.original() })),
			});
		},
	}),
	// withDevtools('border-radius-store'),
	environment.production ? withDevToolsStub('border-radius-store') : withDevtools('border-radius-store'),
);
