import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
//
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputColorModule } from 'primeng/inputcolor';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ButtonModule, ButtonDirective  } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { PopoverModule } from 'primeng/popover';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { FieldsetModule } from 'primeng/fieldset';
//
import { PIcon } from '@primeicons/angular/p-icon';
import { EllipsisV } from '@primeicons/angular/ellipsis-v';
import { ExclamationCircle } from '@primeicons/angular/exclamation-circle';
import { EyeDropper } from '@primeicons/angular/eye-dropper';
import { Check } from '@primeicons/angular/check';
import { ChevronDown } from '@primeicons/angular/chevron-down';
import { CircleFill } from '@primeicons/angular/circle-fill';
import { Copy } from '@primeicons/angular/copy';
import { Pencil } from '@primeicons/angular/pencil';
import { Plus } from '@primeicons/angular/plus';
import { Search } from '@primeicons/angular/search';
import { Times } from '@primeicons/angular/times';
import { Trash } from '@primeicons/angular/trash';
//
import { TooltipExtension } from './directives/tooltip-extension';

const modules = [
    FormsModule,
    NgTemplateOutlet,
    //
    InputTextModule,
    SelectModule,
    InputColorModule,
    AutoCompleteModule,
    IconFieldModule, InputIconModule,
    CheckboxModule, RadioButtonModule, ToggleSwitchModule,
    ButtonModule, ButtonDirective,
    TableModule,
    SidebarModule,
    ConfirmDialogModule, DynamicDialogModule, PopoverModule, TooltipModule, ToastModule,
    FieldsetModule,
    //
    PIcon,
    EllipsisV,
    ExclamationCircle,
    EyeDropper,
    Check,
    ChevronDown,
    CircleFill,
    Copy,
    Pencil,
    Plus,
    Search,
    Times,
    Trash,
    //
    TooltipExtension
];

@NgModule({
    imports: [...modules],
    exports: [...modules],
})
export class SharedModule { }
