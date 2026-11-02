import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenPassword } from './hidden-password';

describe('HiddenPassword', () => {
  let component: HiddenPassword;
  let fixture: ComponentFixture<HiddenPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenPassword],
    }).compileComponents();

    fixture = TestBed.createComponent(HiddenPassword);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
