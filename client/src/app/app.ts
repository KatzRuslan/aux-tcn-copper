import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeader } from '@shared-components/main-header/main-header';
import { SideNavigation } from '@shared-components/side-navigation/side-navigation';
import { SharedModule } from '@shared-module';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet, SharedModule,
        MainHeader, SideNavigation
    ],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    host: { class: 'flex flex-column w-full h-full overflow-hidden' },
})
export class App {
    // protected readonly title = signal('client');
    // test(d: any) {
    //     console.log(d)
    //     console.dir(d)
    // }
}
