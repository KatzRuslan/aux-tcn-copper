import { Component, OnInit, Injector, signal, computed, DestroyRef, effect, viewChild, inject } from '@angular/core';
import { Table } from 'primeng/table';
import { Store } from './store/color-palette.store';
import { copyToClipboard as CopyToClipboard } from '@app-helper';
import { SharedModule } from '@shared-module';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IPalette, IPaletteColor } from '@interfaces';
import { CustomPalette } from './custom-palette/custom-palette';
import { getCustomPalette } from './store/color-palette.helper';

@Component({
    selector: 'color-palette',
    imports: [SharedModule],
    templateUrl: './color-palette.html',
    styleUrl: './color-palette.scss',
    host: { class: 'flex flex-column w-full h-full overflow-hidden' },
})
export default class ColorPalette implements OnInit {
    readonly store = inject(Store);
    readonly _injector = inject(Injector);
    readonly _destroyRef = inject(DestroyRef);
    readonly checks = signal<string[]>([]);
    readonly _dialogService = inject(DialogService);
    readonly filters = computed(() => ({
        custom: [{ value: this.store.customPalettesOnly() ? true : null, matchMode: 'equals', operator: 'and' }]
    }));
    readonly table = viewChild(Table);
    // constructor() {
    //     effect(() => {
    //         this.filters();
    //         queueMicrotask(() => this.table()?._filter());
    //     });
    // }
    toggleCheck(name: string) {
        this.checks.update(current => current.includes(name) ? current.filter(node => node !== name) : [...current, name]);
    }
    copyToClipboard({ token }: IPaletteColor) {
        // navigator
        //     .clipboard.writeText(token)
        //     .then(() => this._messageService.add({ severity: 'success', summary: `Token: ${token}`, detail: 'Copied to clipboard' }));
    }
    openCustomPaletteDialog(palette: IPalette, color = palette.colors[5].color) {
        const { name } = palette;
        const ref: DynamicDialogRef = this._dialogService.open(CustomPalette, {
            header: 'Custom Palette',
            modal: true,
            closable: true,
            draggable: true,
            width: '30rem',
            inputValues: {
                vmodel: structuredClone(palette), color,
                checks: this.store.palettes().filter(({name}) => this.checks().includes(name)),
                labels: this.store.palettes().filter(({name}) => name !== palette.name).map(({label}) => label),
            },
        })!;
        const subscriber = ref.onClose.subscribe((res: IPalette) => {
            subscriber.unsubscribe();
            if (!res) { return }
            if (name) {
                this.store.putPalette(name, res);
            } else {
                this.store.pushPalette(res);
            }
        });
    }
    ngOnInit(): void {
        effect(
            () => {
                this.filters();
                queueMicrotask(() => this.table()?._filter());
            }, { injector: this._injector }
        );
        const handler = (e: Event) => {
            const color = (e as CustomEvent<string>).detail;
            const palette = getCustomPalette(color);
            this.openCustomPaletteDialog(palette, color);
        };
        globalThis.addEventListener('add-palette-color', handler);
        this._destroyRef.onDestroy(() => globalThis.removeEventListener('add-palette-color', handler));
        // setTimeout(() => {
        //     globalThis.dispatchEvent(new CustomEvent('add-palette-color', { detail: '#dc2625' }));
        // }, 360);
    }
}
