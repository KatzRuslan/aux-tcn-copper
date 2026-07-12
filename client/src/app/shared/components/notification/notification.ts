import { Component, inject } from '@angular/core';
import { Store } from '@app-store';
import { SharedModule } from '@shared-module';

@Component({
    selector: 'notification',
    imports: [SharedModule],
    templateUrl: './notification.html',
    styleUrl: './notification.scss',
    host: { class: 'pr-1'}
})
export class Notification {
    readonly store = inject(Store);
}
