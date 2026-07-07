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
    readonly popoverParams = signal({ type: '', name: '', view: '', onclick: (color: string) => {} });
    readonly popoverHeaderAvailable = computed(() => ['grouped', 'primary-color'].includes(this.popoverParams().view))
    readonly inputicons = computed(() => {
        const inputicons: any[] = [];
        switch (this.format()) {
            case 'single-color-name':
                {
                    const color = $dt(`{${this.value()}.500}`).variable;
                    const { label } = this.store.palettes().find(({ name }) => name === this.value())!;
                    inputicons.push({
                        color,
                        tooltip: `${label}`,
                        popover: { type: 'single-color', name: this.value(), view: 'single-color-name' }
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
                                popover: { type: 'light', name: light, view: 'double-color-name' },
                            },
                            {
                                color: $dt(`${dark}.500`).variable,
                                tooltip: 'Dark Color',
                                popover: { type: 'dark', name: dark, view: 'double-color-name' },
                            },
                        );
                    }
                }
                break;
            case 'none':
                inputicons.push({
                    color: this.value().startsWith('#') ? this.value() : $dt(this.value()).variable,
                });
                break;
            case 'primary-color':
                {
                    const [_, light, dark] = /^light-dark\(\s*(.+?)\s*,\s*(.+?)\s*\)$/i.exec(this.value().trim()) ?? ['', undefined, undefined];
                    if (light && dark) {
                        inputicons.push(
                            {
                                color: $dt(light).variable,
                                tooltip: 'Light Color',
                                popover: { type: 'light', name: light.replace(/[{}]/g, ''), view: 'primary-color' },
                            },
                            {
                                color: $dt(dark).variable,
                                tooltip: 'Dark Color',
                                popover: { type: 'dark', name: dark.replace(/[{}]/g, ''), view: 'primary-color' },
                            },
                        );
                    }
                }
                break;
            case 'surface-color':
                inputicons.push({
                    color: $dt(this.value()).variable,
                    tooltip: 'Surface Color',
                    popover: { type: 'single-color', name: this.value().replace(/[{}]/g, ''), view: 'surface-color' },
                });
                break;
            default:
                {
                    const [_, light, dark] = /^light-dark\(\s*(.+?)\s*,\s*(.+?)\s*\)$/i.exec(this.value().trim()) ?? ['', undefined, undefined];
                    if (light && dark) {
                        inputicons.push(
                            {
                                color: $dt(light).variable,
                                tooltip: 'Light Color',
                                popover: { type: 'light', name: light.replace(/[{}]/g, ''), view: 'grouped' },
                            },
                            {
                                color: $dt(dark).variable,
                                tooltip: 'Dark Color',
                                popover: { type: 'dark', name: dark.replace(/[{}]/g, ''), view: 'grouped' },
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
            case 'single-color-name':
            case 'double-color-name':
                palettes.push(
                    ...this.store.palettes().map(({ name, colors }) => ({
                        name, color: colors.at(4)!.color,
                    })),
                );
                break;
            case 'primary-color':
                palettes.push(
                    ...this.store.colorSteps().map(step => {
                        const color = `primary.${step}`;
                        return {
                            label: color, color: $dt(color).value,
                        }
                    })
                );
                break;
            case 'surface-color':
                palettes.push(
                    ...[0, ...this.store.colorSteps(), 1000].map(step => {
                        const color = `surface.${step}`;
                        return {
                            label: color, color: $dt(color).value,
                        }
                    })
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
        const box = this.popover()?.container;
        const input = this.colorInput()?.nativeElement;
        if (!box || !input) { return; }
        const rect = input.getBoundingClientRect();
        box.style.left = `${rect.right - box.offsetWidth + window.scrollX}px`;
    }
    onPopoverHide() {
        this.popoverParams.update(current => ({ ...current, type: '' }));
    }
    /** Скроллит список поповера к кнопке с id = выбранный токен (по центру видимой области). */
    scrollToSelected() {
        const box = this.popover()?.container;
        const target = box?.querySelector<HTMLElement>(`[id="${this.popoverParams().name}"]`);
        target?.scrollIntoView({ block: 'center' });
    }
    openPopover(popover: { type: string; name: string; view: string }, event: Event) {
        if (this.popoverParams().type === popover.type) {
            this.popover()?.hide();
            return;
        }
        this.popoverParams.set({
            ...popover,
            onclick: (color: string) => {
                this.popover()?.hide();
                let value = '';
                switch (this.format()) {
                    case 'single-color-name':
                        value = color;
                        break;
                    case 'surface-color':
                        value = `{${color}}`;
                        break;
                    case 'double-color-name':
                        {
                            const [light, dark] = this.value().split(',').map(node => node.trim());
                            value = popover.type === 'light' ? `${color}, ${dark}` : `${light}, ${color}`;
                        }
                        break;
                    default:
                        {
                            const [_, light, dark] = /^light-dark\(\s*(.+?)\s*,\s*(.+?)\s*\)$/i.exec(this.value()) ?? ['', undefined, undefined];
                            value = popover.type === 'light' ? `light-dark({${color}}, ${dark})` : `light-dark(${light}, {${color}})` ;
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
}
