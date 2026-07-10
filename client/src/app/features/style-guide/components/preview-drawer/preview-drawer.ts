import { Component, inject } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { SharedModule } from '@shared-module';
import { Store } from '@style-guide-store';

@Component({
    selector: 'preview-drawer',
    imports: [SharedModule, NgComponentOutlet],
    templateUrl: './preview-drawer.html',
    styleUrl: './preview-drawer.scss',
})
export class PreviewDrawer {
    readonly store = inject(Store);
    readonly defaultStyleClass = 'flex flex-column gap-3 px-2';
}
