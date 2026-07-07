import { Injector, computed, runInInjectionContext, inject } from '@angular/core';
import { signalStore, withState, withProps, withMethods, withComputed, withHooks } from '@ngrx/signals';
import { Store as StyleGuidStore } from '@style-guide-store';
import { updateState, withDevtools, withDevToolsStub } from '@angular-architects/ngrx-toolkit';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { initialColorPaletteSlice } from './color-palette.slice';
import { initColorPaletteHelperContext, initColorPalette, checkColor, electronWritePalettes, createColorPalette } from './color-palette.helper';
import { initColorPaletteStore, toogleCustomPalettesOnly, updateSearchColor, pushPalette, putPalette, deletePalette } from './color-palette.updates';
import { vmColorPalettes, vmRightHeader } from './color-palette.vm-builder';
import { environment } from '@environments';
import { IPalette } from '@interfaces';
import { switchMap, pipe } from 'rxjs';

export const Store = signalStore(
	{ providedIn: 'root' },
	withState(initialColorPaletteSlice),
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
		//-- const _test = () => updateState(store, '[ColorPaletteStore] Action', );
        return {
            // initStore2: ({ steps, names }: { steps: number[]; names: string[] }) => {
            //     updateState(store, '[ColorPalette Store] Init Store', initStore(steps, names));
            //     rxMethod<void>(
            //         pipe(
            //             switchMap(_ =>
            //                 getPalette().pipe(
            //                     tapResponse({
            //                         next: palettes => updateState(store, '[ColorPalette Store] Init Palettes', initPalettes(palettes)),
            //                         error: err => console.error(err),
            //                     })
            //                 )
            //             )
            //         ),
            //         { injector: store._injector }
            //     )();
            // },
            initStore: rxMethod<void>(
                pipe(
                    switchMap(_ =>
                        initColorPalette().pipe(
                            tapResponse({
                                // next: ({ scheme, semantic }) => updateState(store, '[SemanticStore] Init Store', initSemanticStore(scheme, semantic)),
                                next: ({ palettes, steps}) => updateState(store, '[ColorPalette Store] Init Palettes', initColorPaletteStore(palettes, steps)),
                                error: err => console.error(err),
                            })
                        )
                    )
                ),
                { injector: store._injector }
            ),
            toogleCustomPalettesOnly: () => updateState(store, '[ColorPalette Store] Toogle Custom Palettes Only', toogleCustomPalettesOnly()),
            updateSearchColor: (search: string) => updateState(store, '[ColorPalette Store] Update Search Color', updateSearchColor(search)),
            pushPalette: (palette: IPalette) => {
                updateState(store, '[ColorPalette Store] Push Custom Palette', pushPalette(palette));
                electronWritePalettes();
                store._styleGuidStore().createPreset();
            },
            putPalette: (name: string, palette: IPalette) => {
                updateState(store, '[ColorPalette Store] Put Custom Palette', putPalette(name, palette));
                electronWritePalettes();
                store._styleGuidStore().createPreset();
            },
            deletePalette: (name: string) => {
                updateState(store, '[ColorPalette Store] Delete Custom Palette', deletePalette(name));
                electronWritePalettes();
                store._styleGuidStore().createPreset();
            },
        }
    }),
	withComputed(store => {
        return {
            vmColorPalettes: computed<{ steps: number[], palettes: IPalette[] }>(() => vmColorPalettes(store.palettes(), store.steps(), store.searchColor(), store.customPalettesOnly())),
            vmRightHeader: computed(() => vmRightHeader(store.searchColor(), store.customPalettesOnly(), !checkColor(store.searchColor(), store.palettes()))),
            getColorPalette: computed(() => createColorPalette()),
        }
    }),
	withHooks({
		onInit(store) {
			initColorPaletteHelperContext({
                steps: computed(() => store.steps()),
                palettes: computed(() => store.palettes()),
			})
		},
	}),
	// withDevtools('color-palette-store'),
	environment.production ? withDevToolsStub('color-palette-store') : withDevtools('color-palette-store'),
);
