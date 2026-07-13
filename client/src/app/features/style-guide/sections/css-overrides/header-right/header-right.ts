import { Component } from '@angular/core';
import { SharedCoreModule } from '@shared-core-module';
import { CssIcon } from '@shared/icons/css-icon';

@Component({
    selector: 'css-overrides-header-right',
    imports: [SharedCoreModule, CssIcon],
    templateUrl: './header-right.html',
    styleUrl: './header-right.scss',
})
export class HeaderRight {
    /** DOM-событие вместо прямого вызова: header-right (app shell) и form-styles (lazy-секция) не связаны иерархией. */
    fireCssEvent() {
        document.dispatchEvent(new Event('add-override-css'));
    }
}
