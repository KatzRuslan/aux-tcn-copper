import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyValue } from './property-value';

describe('PropertyValue', () => {
    let component: PropertyValue;
    let fixture: ComponentFixture<PropertyValue>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PropertyValue],
        }).compileComponents();

        fixture = TestBed.createComponent(PropertyValue);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
