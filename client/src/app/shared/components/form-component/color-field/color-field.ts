import { Component, input, output, signal, computed, inject, viewChild, ElementRef } from '@angular/core';
import { $dt } from '@primeuix/themes';
import { SharedModule } from '@shared-module';
import { Store } from '@style-guide-store';
import { Popover } from 'primeng/popover';

@Component({
    selector: 'color-field',
    imports: [SharedModule],
    templateUrl: './color-field.html',
    styleUrl: './color-field.scss',
    host: { class: 'flex align-items-center w-full' },
})
export class ColorField {
    readonly store = inject(Store);
    readonly value = input.required<string>();
    readonly inputId = input.required<string>();
    readonly options = input.required<string[]>();
    readonly isReadonly = input<boolean | undefined>(false);
    readonly changeHandler = output<string>();
    readonly format = computed(() => this.options().at(0));
    readonly popupparams = signal({ type: '', name: '', view: '', onclick: (color: string) => {} });
    readonly inputicons = computed(() => {
        const inputicons: any[] = [];
        switch (this.format()) {
            case '':
                //-
                break;
            case '___':
                //--
                break;
            case 'single-color-name':
                {
                    const color = $dt(`{${this.value()}.500}`).variable;
                    const { label } = this.store.palettes().find(({ name }) => name === this.value())!;
                    inputicons.push({
                        color,
                        tooltip: `${label}`,
                        popup: { type: 'single-color', name: this.value(), view: 'single-color-name' }
                    });
                }
                break;
            case 'double-color-name':
                {
                    const [light, dark] = this.value().split(',').map(node => node.trim());
                    if (light && dark) {
                        inputicons.push(
                            {
                                color: $dt(`${light}.500`).variable,
                                tooltip: 'Light Color',
                                popup: { type: 'light', name: light, view: 'double-color-name' },
                            },
                            {
                                color: $dt(`${dark}.500`).variable,
                                tooltip: 'Dark Color',
                                popup: { type: 'dark', name: dark, view: 'double-color-name' },
                            },
                        );
                    }
                }
                break;
            default:
                {
                    const [_, light, dark] = /^light-dark\(\s*(.+?)\s*,\s*(.+?)\s*\)$/i.exec(this.value().trim()) ?? ['', undefined, undefined];
                    if (light && dark) {
                        inputicons.push(
                            {
                                color: $dt(light).variable,
                                tooltip: 'Light Color',
                                popup: { type: 'light', name: light.replace(/[{}]/g, ''), view: 'grouped' },
                            },
                            {
                                color: $dt(dark).variable,
                                tooltip: 'Dark Color',
                                popup: { type: 'dark', name: dark.replace(/[{}]/g, ''), view: 'grouped' },
                            },
                        );
                    }
                }
                break;
        }
        return inputicons;
    });
    readonly palettes = computed(() => {
        const palettes: any[] = [];
        switch (this.format()) {
            case '':
                //-
                break;
            case '___':
                //--
                break;
            case 'single-color-name':
            case 'double-color-name':
                palettes.push(
                    ...this.store.palettes().map(({ name, colors }) => ({
                        name, color: colors.at(4)!.color,
                    })),
                );
                break;
            default:
                palettes.push(
                    ...this.store.palettes().map(({ label, name, colors }) => ({
                        label, colors: colors.map(({ step, color }) => ({
                            label: `${name}.${step}`,
                            light: color, dark: color
                        }))
                    })),
                    {
                        label: 'Surface',
                        colors: [0, ...this.store.colorSteps()].map(step => {
                            const color: string = `surface.${step}`;
                            const [_, light, dark] = /^light-dark\(\s*(.+?)\s*,\s*(.+?)\s*\)$/i.exec($dt(color).value as string) ?? ['', undefined, undefined];
                            return {
                                label: color, light, dark,
                            }
                        })
                    }
                );
                break;
        }
        return palettes;
    });
    readonly popover = viewChild<Popover>('popover');
    readonly colorInput = viewChild<ElementRef<HTMLElement>>('colorInput');
    /** Прижимает поповер правым краем к правому краю инпута → раскрытие вниз и влево. */
    alignPopover() {
        console.log()
        const box = this.popover()?.container;
        const input = this.colorInput()?.nativeElement;
        if (!box || !input) { return; }
        const rect = input.getBoundingClientRect();
        box.style.left = `${rect.right - box.offsetWidth + window.scrollX}px`;
    }
    onPopupHide() {
        this.popupparams.update(current => ({ ...current, type: '' }));
    }
    /** Скроллит список поповера к кнопке с id = выбранный токен (по центру видимой области). */
    scrollToSelected() {
        const box = this.popover()?.container;
        const target = box?.querySelector<HTMLElement>(`[id="${this.popupparams().name}"]`);
        target?.scrollIntoView({ block: 'center' });
    }
    openPopup(popup: { type: string; name: string; view: string }, event: Event) {
        if (this.popupparams().type === popup.type) {
            this.popover()?.hide();
            return;
        }
        // this.popover()?.hide();
        // console.log(popup)
        this.popupparams.set({
            ...popup,
            onclick: (color: string) => {
                this.popover()?.hide();
                let value = '';
                switch (this.format()) {
                    case '':
                        //-
                        break;
                    case '___':
                        //--
                        break;
                    case 'single-color-name':
                        value = color;
                        break;
                    case 'double-color-name':
                        {
                            const [light, dark] = this.value().split(',').map(node => node.trim());
                            value = popup.type === 'light' ? `${color}, ${dark}` : `${light}, ${color}`;
                        }
                        break;
                    default:
                        {
                            const [_, light, dark] = /^light-dark\(\s*(.+?)\s*,\s*(.+?)\s*\)$/i.exec(this.value()) ?? ['', undefined, undefined];
                            value = popup.type === 'light' ? `light-dark({${color}}, ${dark})` : `light-dark(${light}, {${color}})` ;
                        }
                        break;
                }
                this.changeHandler.emit(value);
            }
        });
        this.popover()?.show(event);
        // onShow не срабатывает при повторном show на уже открытом поповере — выравниваем вручную
        requestAnimationFrame(() => this.alignPopover());
        // скролл — после анимации открытия, иначе геометрия списка ещё «плывёт»
        setTimeout(() => this.scrollToSelected(), 240);
    }
    constructor() {
        setTimeout(() => {
            // console.log(this.options())
            // console.log(this.inputicons())
            // console.log(this.palettes())
            // console.log(this.store.palettes())
        }, 480);
    }
}
