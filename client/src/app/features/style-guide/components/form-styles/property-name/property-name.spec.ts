import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyName } from './property-name';

describe('PropertyName', () => {
    let component: PropertyName;
    let fixture: ComponentFixture<PropertyName>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [PropertyName],
        }).compileComponents();

        fixture = TestBed.createComponent(PropertyName);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
