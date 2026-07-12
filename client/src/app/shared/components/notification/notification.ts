import { Component, inject } from '@angular/core';
import { Store } from '@app-store';
import { SharedCoreModule } from '@shared-core-module';

@Component({
    selector: 'notification',
    imports: [SharedCoreModule],
    templateUrl: './notification.html',
    styleUrl: './notification.scss',
    host: { class: 'pr-1'}
})
export class Notification {
    readonly store = inject(Store);
}
