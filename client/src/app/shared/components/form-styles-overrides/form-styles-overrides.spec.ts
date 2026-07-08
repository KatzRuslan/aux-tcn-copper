import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStylesOverrides } from './form-styles-overrides';

describe('FormStylesOverrides', () => {
    let component: FormStylesOverrides;
    let fixture: ComponentFixture<FormStylesOverrides>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormStylesOverrides],
        }).compileComponents();

        fixture = TestBed.createComponent(FormStylesOverrides);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
