import { Component, inject } from '@angular/core';
import { SharedCoreModule } from '@shared-core-module';
import { Conductor } from '@shared-components/conductor/conductor';
import { Store } from '@style-guide-store';

@Component({
    selector: 'ui-component-header-right',
    imports: [SharedCoreModule, Conductor],
    templateUrl: './header-right.html',
    styleUrl: './header-right.scss',
    host: { class: 'flex align-items-center gap-3' }
})
export class HeaderRight {
    readonly store = inject(Store);
}
