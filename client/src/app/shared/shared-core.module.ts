import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
//
import { PIcon } from '@primeicons/angular/p-icon';
import { Bars } from '@primeicons/angular/bars';
import { Bookmark } from '@primeicons/angular/bookmark';
import { ChevronDown } from '@primeicons/angular/chevron-down';
import { History } from '@primeicons/angular/history';
import { Plus } from '@primeicons/angular/plus';
import { Search } from '@primeicons/angular/search';
import { Times } from '@primeicons/angular/times';

/**
 * Лёгкий набор для eagerly-загружаемых компонентов (app shell:
 * main-header, side-navigation, conductor, searher, header-right).
 * Полный SharedModule импортировать только из lazy-секций —
 * иначе вся PrimeNG уедет в стартовый бандл.
 */
const modules = [
    FormsModule,
    //
    ButtonModule,
    ConfirmDialogModule,
    IconFieldModule, InputIconModule,
    InputTextModule,
    SidebarModule,
    ToastModule,
    ToggleSwitchModule,
    //
    PIcon,
    Bars,
    Bookmark,
    ChevronDown,
    History,
    Plus,
    Search,
    Times,
];

@NgModule({
    imports: [...modules],
    exports: [...modules],
})
export class SharedCoreModule { }
