import { Component } from '@angular/core';
import { SharedModule } from '@shared-module';
import { Conductor } from '@shared-components/conductor/conductor';

@Component({
    selector: 'ui-component-header-right',
    imports: [SharedModule, Conductor],
    templateUrl: './header-right.html',
    styleUrl: './header-right.scss',
    host: { class: 'flex align-items-ceenter gap-3' }
})
export class HeaderRight {}
