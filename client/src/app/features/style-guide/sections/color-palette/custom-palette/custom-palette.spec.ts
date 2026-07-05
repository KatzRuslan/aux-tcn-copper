import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPalette } from './custom-palette';

describe('CustomPalette', () => {
    let component: CustomPalette;
    let fixture: ComponentFixture<CustomPalette>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CustomPalette],
        }).compileComponents();

        fixture = TestBed.createComponent(CustomPalette);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
