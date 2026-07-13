import { Component, inject } from '@angular/core';
import { SharedCoreModule } from '@shared-core-module';
import { Store } from '@style-guide-store';

@Component({
    selector: 'drawer-button',
    imports: [SharedCoreModule],
    templateUrl: './drawer-button.html',
    styleUrl: './drawer-button.scss',
})
export class DrawerButton {
    readonly store = inject(Store);
}
