import { Injector, computed, runInInjectionContext, inject, effect, untracked } from '@angular/core';
import { Store as AppStore} from '@app-store';
import { Store as ColorPaletteStore} from '../sections/color-palette/store/color-palette.store';
import { Store as BorderRadiusStore} from '../sections/border-radius/store/border-radius.store';
import { Store as SemanticStore} from '../sections/semantic/store/semantic.store';
import { Store as CssOverridesStore} from '../sections/css-overrides/store/css-overrides.store';
import { Store as UiComponentStore} from '../sections/ui-component/store/ui-component.store';
import { signalStore, withState, withProps, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { updateState, withDevtools, withDevToolsStub } from '@angular-architects/ngrx-toolkit';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { initialStyleGuideSlice } from './style-guide.slice';
import { createPreset, initStyleGuideHelperContext } from './style-guide.helper';
import { initStyleGuideStore, putShowDrawer } from './style-guide.updates';
import { vmodel } from './style-guide.vm-builder';
import { environment } from '@environments';

export const Store = signalStore(
	{ providedIn: 'root' },
	withState(initialStyleGuideSlice),
	withProps(_ => {
        const injector = inject(Injector);
        let appStore: InstanceType<typeof AppStore> | null = null;
        let colorPaletteStore: InstanceType<typeof ColorPaletteStore> | null = null;
        let borderRadiusStore: InstanceType<typeof BorderRadiusStore> | null = null;
        let semanticStore: InstanceType<typeof SemanticStore> | null = null;
        let cssOverridesStore: InstanceType<typeof CssOverridesStore> | null = null;
        let uiComponentStore: InstanceType<typeof UiComponentStore> | null = null;
		return {
			_injector: injector,
            _appStore: (): InstanceType<typeof AppStore> => {
                appStore ??= runInInjectionContext(injector, () => inject(AppStore));
                return appStore;
            },
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
            _cssOverridesStore: (): InstanceType<typeof CssOverridesStore> => {
                cssOverridesStore ??= runInInjectionContext(injector, () => inject(CssOverridesStore));
                return cssOverridesStore;
            },
            _uiComponentStore: (): InstanceType<typeof UiComponentStore> => {
                uiComponentStore ??= runInInjectionContext(injector, () => inject(UiComponentStore));
                return uiComponentStore;
            },
            _active: computed(() => {
                const state = appStore?.aciveState() ?? '';
                console.log(state)
                console.log('***********')
                return 'aa'
            })
		}
	}),
	withMethods(store => {
		//- const _test = () => updateState(store, '[StyleGuideStore] Action', );
        return {
            initStore: () => {
                store._colorPaletteStore().initStore();
                store._borderRadiusStore().initStore();
                store._semanticStore().initStore();
                store._cssOverridesStore().initStore();
                store._uiComponentStore().initStore();
            },
            toggleDrawer: () => updateState(store, '[StyleGuideStore] Put ShowDrawer', putShowDrawer(!store.showDrawer())),
            createPreset,
        }
    }),
	withComputed(store => {
        const active = computed(() => {
            const state = store._appStore().aciveState() ?? '';
            if (state === 'define-semantic') {
                return 'define-semantic';
            }
            if (state !== 'component-settings') {
                return '';
            }
            return store._appStore().activeName() ?? '';
        });
        return {
            active,
            colorSteps: computed(() => store._colorPaletteStore().steps()),
            palettes: computed(() => store._colorPaletteStore().palettes()),
        }
    }),
	withHooks({
		onInit(store) {
			initStyleGuideHelperContext({
                colorPalette: computed(() => store._colorPaletteStore().getColorPalette()),
                borderRadius: computed(() => store._borderRadiusStore().getBorderRadius()),
                semantic: computed(() => store._semanticStore().getSemantic()),
                cssOverrides: computed(() => store._cssOverridesStore().getCssOverrides()),
                components: computed(() => store._uiComponentStore().getComponents()),
			});
            updateState(store, '[StyleGuideStore] Put ShowDrawer', putShowDrawer(true));
            effect(() => {
                // store.active(); // триггер — смена активного раздела
                // untracked(() => {
                //     if (store.showDrawer()) {
                //         updateState(store, '[StyleGuideStore] Put ShowDrawer', putShowDrawer(false));
                //     }
                // });
            });
		},
	}),
	// withDevtools('style-guide-store'),
	environment.production ? withDevToolsStub('style-guide-store') : withDevtools('style-guide-store'),
);
