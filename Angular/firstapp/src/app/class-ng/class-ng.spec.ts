import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassNg } from './class-ng';

describe('ClassNg', () => {
  let component: ClassNg;
  let fixture: ComponentFixture<ClassNg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassNg],
    }).compileComponents();

    fixture = TestBed.createComponent(ClassNg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
