import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayPage } from './two-way-page';

describe('TwoWayPage', () => {
  let component: TwoWayPage;
  let fixture: ComponentFixture<TwoWayPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TwoWayPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
