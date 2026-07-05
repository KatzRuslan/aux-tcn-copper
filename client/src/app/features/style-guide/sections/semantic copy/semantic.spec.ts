import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semantic } from './semantic';

describe('Semantic', () => {
    let component: Semantic;
    let fixture: ComponentFixture<Semantic>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [Semantic],
        }).compileComponents();

        fixture = TestBed.createComponent(Semantic);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
