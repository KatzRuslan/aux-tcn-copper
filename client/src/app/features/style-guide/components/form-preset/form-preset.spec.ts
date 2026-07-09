import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPreset } from './form-preset';

describe('FormPreset', () => {
    let component: FormPreset;
    let fixture: ComponentFixture<FormPreset>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormPreset],
        }).compileComponents();

        fixture = TestBed.createComponent(FormPreset);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
