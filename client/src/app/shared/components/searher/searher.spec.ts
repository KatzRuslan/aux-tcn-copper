import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Searher } from './searher';

describe('Searher', () => {
    let component: Searher;
    let fixture: ComponentFixture<Searher>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Searher],
        }).compileComponents();

        fixture = TestBed.createComponent(Searher);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
