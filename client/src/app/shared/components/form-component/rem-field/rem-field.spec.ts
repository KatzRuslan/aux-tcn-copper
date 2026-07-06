import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemField } from './rem-field';

describe('RemField', () => {
    let component: RemField;
    let fixture: ComponentFixture<RemField>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RemField],
        }).compileComponents();

        fixture = TestBed.createComponent(RemField);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
