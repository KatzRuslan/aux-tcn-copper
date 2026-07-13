import { Component } from '@angular/core';
import { Conductor } from '@shared-components/conductor/conductor';
import { DrawerButton } from '@shared-components/drawer-button/drawer-button';

@Component({
    selector: 'define-semantic-header-right',
    imports: [Conductor, DrawerButton],
    templateUrl: './header-right.html',
    styleUrl: './header-right.scss',
    host: { class: 'flex align-items-center gap-3' },
})
export class HeaderRight {}
