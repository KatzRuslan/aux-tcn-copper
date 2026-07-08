import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssOverrides } from './css-overrides';

describe('CssOverrides', () => {
    let component: CssOverrides;
    let fixture: ComponentFixture<CssOverrides>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CssOverrides],
        }).compileComponents();

        fixture = TestBed.createComponent(CssOverrides);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
