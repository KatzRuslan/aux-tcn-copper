import { Component, inject } from '@angular/core';
import { SharedModule } from '@shared-module';
import { Store } from '@style-guide-store';

@Component({
    selector: 'preview-drawer',
    imports: [SharedModule],
    templateUrl: './preview-drawer.html',
    styleUrl: './preview-drawer.scss',
})
export class PreviewDrawer {
    readonly store = inject(Store);
}
