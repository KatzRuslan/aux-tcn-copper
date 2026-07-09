import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStyles } from './form-styles';

describe('FormStyles', () => {
    let component: FormStyles;
    let fixture: ComponentFixture<FormStyles>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormStyles],
        }).compileComponents();

        fixture = TestBed.createComponent(FormStyles);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
