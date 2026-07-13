import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerButton } from './drawer-button';

describe('DrawerButton', () => {
    let component: DrawerButton;
    let fixture: ComponentFixture<DrawerButton>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [DrawerButton],
        }).compileComponents();

        fixture = TestBed.createComponent(DrawerButton);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
