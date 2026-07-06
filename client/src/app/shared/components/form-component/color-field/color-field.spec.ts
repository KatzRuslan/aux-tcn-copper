import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorField } from './color-field';

describe('ColorField', () => {
    let component: ColorField;
    let fixture: ComponentFixture<ColorField>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ColorField],
        }).compileComponents();

        fixture = TestBed.createComponent(ColorField);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
