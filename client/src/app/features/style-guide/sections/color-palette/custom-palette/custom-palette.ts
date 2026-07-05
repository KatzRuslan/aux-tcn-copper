import { Component, input, linkedSignal, computed, inject } from '@angular/core';
import { form, FormField, required, readonly, validate } from '@angular/forms/signals';
import { SharedModule } from '@shared-module';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { IPalette } from '@interfaces';
import { isEqual } from 'lodash';

@Component({
    selector: 'app-custom-palette',
    imports: [SharedModule, FormField],
    templateUrl: './custom-palette.html',
    styleUrl: './custom-palette.scss',
    host: { class: 'flex flex-column gap-4' },
})
export class CustomPalette {
    readonly _dialogRef = inject(DynamicDialogRef);
    readonly vmodel = input.required<IPalette>();
    readonly color = input.required<string>();
    readonly checks = input.required<IPalette[]>();
    readonly labels = input.required<string[]>();
    readonly formModel = linkedSignal<IPalette>(() => this.vmodel());
    readonly formGroup = form<IPalette>(this.formModel, (schema) => {
        required(schema.label, { message: 'Color Name is required' });
        readonly(schema.name);
        validate(schema.label, ({ value }) => {
            if (this.labels().includes(value())) {
                return { kind: 'duplicate', message: 'Duplicate name' };
            }
            return null;
        });
        validate(schema, ({ value }) => {
            return this.vmodel().name.length && isEqual(value(), this.vmodel()) ? { kind: 'unchanged', message: 'Unchanged' } : null;
        })
    });
    readonly checkColor = linkedSignal<string>(() => this.color());
    readonly errors = computed(() => this.formGroup().errorSummary().map(({ message }) => message));
    readonly motionOptions: any = {
        enterClass: {
            from: 'opacity-0',
            active: 'transition-all duration-200',
            to: 'opacity-100',
        },
        leaveClass: {
            from: 'opacity-100',
            active: 'transition-all duration-150',
            to: 'opacity-0',
        }
    };
    //
    onCheckColorChange({ target }: Event) {
        const input = target as HTMLInputElement;
        const color = input.value;
        if (/^#[0-9a-fA-F]{6}$/.test(color)) {
            this.checkColor.set(color);
        }
    }
    // // onColorPickerChange({ value }: ColorPickerChangeEvent) {
    // onColorPickerChange(color: string) {
    //     console.log(color)
    //     this.checkColor.set(color);
    //     // if (typeof value === 'string' && /^#[0-9a-fA-F]{6}$/.test(value)) {
    //     //     this.checkColor.set(value);
    //     // }
    // }
    onLabelChange({ target }: Event) {
        const input = target as HTMLInputElement;
        const label = `${input.value.charAt(0).toUpperCase()}${input.value.slice(1).toLowerCase()}`.replaceAll(/\s{2,}/g, ' ');
        const name = label.toLowerCase().replaceAll(' ', '-');
        input.value = label;
        this.formModel.update(current => ({
            ...current, label, name,
            colors: current.colors.map(node => ({ ...node, token: `--p-${name}-${node.step}` }))
        }));
    }
    onDragStart(event: Event, color: string) {
        (event as DragEvent).dataTransfer?.setData('color', color);
    }
    onCheckColorDrop(event: Event) {
        const color = (event as DragEvent).dataTransfer?.getData('color');
        if (color && /^#[0-9a-fA-F]{6}$/.test(color)) {
            this.checkColor.set(color);
        }
    }
    onPaletteDrop(event: Event, index: number) {
        const color = (event as DragEvent).dataTransfer?.getData('color');
        if (color && /^#[0-9a-fA-F]{6}$/.test(color)) {
            this.formModel.update(current => ({
                ...current,
                colors: current.colors.map((node, i) =>
                    i === index ? { ...node, color } : node
                )
            }));
        }
    }
    onSubmit() {
        this._dialogRef.close(structuredClone(this.formModel()));
    }
    onCancel() {
        this._dialogRef.close();
    }
}
