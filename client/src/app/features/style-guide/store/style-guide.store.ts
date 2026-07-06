import { Injector, computed, runInInjectionContext, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store as ColorPaletteStore} from '../sections/color-palette/store/color-palette.store';
import { Store as BorderRadiusStore} from '../sections/border-radius/store/border-radius.store';
import { Store as SemanticStore} from '../sections/semantic/store/semantic.store';
import { signalStore, withState, withProps, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { updateState, withDevtools, withDevToolsStub } from '@angular-architects/ngrx-toolkit';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { initialStyleGuideSlice } from './style-guide.slice';
import { createPreset, initStyleGuideHelperContext } from './style-guide.helper';
import { initStyleGuideStore } from './style-guide.updates';
import { vmodel } from './style-guide.vm-builder';
import { environment } from '@environments';
import { IConfigurations } from '@interfaces';
import { palette } from '@primeuix/themes';

export const Store = signalStore(
	{ providedIn: 'root' },
	withState(initialStyleGuideSlice),
	withProps(_ => {
        const injector = inject(Injector);
        let colorPaletteStore: InstanceType<typeof ColorPaletteStore> | null = null;
        let borderRadiusStore: InstanceType<typeof BorderRadiusStore> | null = null;
        let semanticStore: InstanceType<typeof SemanticStore> | null = null;
		return {
			_injector: injector,
            _colorPaletteStore: (): InstanceType<typeof ColorPaletteStore> => {
                colorPaletteStore ??= runInInjectionContext(injector, () => inject(ColorPaletteStore));
                return colorPaletteStore;
            },
            _borderRadiusStore: (): InstanceType<typeof BorderRadiusStore> => {
                borderRadiusStore ??= runInInjectionContext(injector, () => inject(BorderRadiusStore));
                return borderRadiusStore;
            },
            _semanticStore: (): InstanceType<typeof SemanticStore> => {
                semanticStore ??= runInInjectionContext(injector, () => inject(SemanticStore));
                return semanticStore;
            },
		}
	}),
	withMethods(store => {
		//- const _test = () => updateState(store, '[StyleGuideStore] Action', );
        return {
            initStore: ({ colorPalette, borderRadius, semantic }: IConfigurations) => {
                store._colorPaletteStore().initStore(colorPalette);
                store._borderRadiusStore().initStore(borderRadius);
                store._semanticStore().initStore(semantic);
            },
            createPreset,
        }
    }),
	withComputed(store => {
        return {
            colorSteps: computed(() => store._colorPaletteStore().steps()),
            palettes: computed(() => store._colorPaletteStore().palettes())
        }
    }),
	withHooks({
		onInit(store) {
			initStyleGuideHelperContext({
				httpClient: inject(HttpClient),
                palettes: computed(() => store._colorPaletteStore().palettes().filter(({ custom }) => custom)),
                borderRadius: computed(() => store._borderRadiusStore().custom()),
                semantic: computed(() => store._semanticStore().semantic()),
			});
            setTimeout(() => {
                store.createPreset();
            }, 860);
		},
	}),
	// withDevtools('style-guide-store'),
	environment.production ? withDevToolsStub('style-guide-store') : withDevtools('style-guide-store'),
);
