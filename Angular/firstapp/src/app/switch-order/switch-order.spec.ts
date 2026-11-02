import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchOrder } from './switch-order';

describe('SwitchOrder', () => {
  let component: SwitchOrder;
  let fixture: ComponentFixture<SwitchOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchOrder],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchOrder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
