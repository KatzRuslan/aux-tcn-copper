import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderRadius } from './border-radius';

describe('BorderRadius', () => {
    let component: BorderRadius;
    let fixture: ComponentFixture<BorderRadius>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BorderRadius],
        }).compileComponents();

        fixture = TestBed.createComponent(BorderRadius);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
