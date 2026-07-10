import { Component, Injector, signal, inject, computed, linkedSignal, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPONENT_ITEMS } from '@seed';
import { SharedModule } from '@shared-module';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { IComponentItem } from '@interfaces';

@Component({
    selector: 'searher',
    imports: [SharedModule, RouterLink],
    templateUrl: './searher.html',
    styleUrl: './searher.scss',
    host: { class: 'flex flex-column w-34rem h-28rem overflow-hidden' },
})
export class Searher {
    readonly _injector = inject(Injector);
    readonly _dialogRef = inject(DynamicDialogRef);
    readonly bookmarks = input.required<IComponentItem[]>();
    readonly recent = input.required<IComponentItem[]>();
    readonly search = signal('');
    readonly mode = linkedSignal(() => this.recent().length ? 'recent' : 'bookmark');
    readonly result = computed(() => {
        const search = (this.search() ?? '').toLowerCase();
        const mode = this.mode();
        if (search.length) {
            return [...COMPONENT_ITEMS].filter(({ name }) => name.includes(search)).map(node => ({ ...node, icon: 'th-large' }));
        } else if (this.recent().length && mode === 'recent') {
            return this.recent().map(node => ({ ...node, icon: 'history' }));
        }
        return this.bookmarks().map(node => ({ ...node, icon: 'bookmark' }));
    });
    close() {
        this._dialogRef.close();
    }
    onSelect(node: IComponentItem) {
        sessionStorage.setItem('recent-components', JSON.stringify([node.name, ...JSON.parse(sessionStorage.getItem('recent-components') ?? '[]').filter((name: string) => name !== node.name)].slice(0, 20)));
        this.close();
    }
}
