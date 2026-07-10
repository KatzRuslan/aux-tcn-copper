import { Component, inject } from '@angular/core';
import { Store } from '@app-store';
import { IComponentItem } from '@interfaces';
import { COMPONENT_ITEMS } from '@seed';
import { Searher } from '@shared-components/searher/searher';
import { SharedModule } from '@shared-module';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
    selector: 'conductor',
    imports: [SharedModule],
    templateUrl: './conductor.html',
    styleUrl: './conductor.scss',
    host: {
        class: 'flex justify-content-center align-items-center gap-3 p-3 pb-2',
        '(document:keydown.control.k)': 'openSearcher()',
        '(document:keydown.meta.k)': 'openSearcher()',
    },
})
export class Conductor {
    readonly store = inject(Store);
    readonly dialogService = inject(DialogService);
    openSearcher() {
        const bookmarks = this.store.bookmarks()
            .map(bookmark => COMPONENT_ITEMS.find(({ name }) => name === bookmark))
            .filter(bookmark => !!bookmark);
        const recent = JSON.parse(sessionStorage.getItem('recent-components') ?? '[]')
            .map((recently: string) => COMPONENT_ITEMS.find(({ name }) => name === recently))
            .filter((recently:IComponentItem) => !!recently);
        this.dialogService.open(Searher, {
            showHeader: false,
            position: 'top',
            resizable: false,
            styleClass: 'mt-8',
            closable: true,
            closeOnEscape: true,
            pt: { content: { class: 'p-0' } },
            inputValues: {
                bookmarks, recent,
            }
        });
    }
}
