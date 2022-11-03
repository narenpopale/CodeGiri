import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem1Component } from './problem1.component';

describe('Problem1Component', () => {
  let component: Problem1Component;
  let fixture: ComponentFixture<Problem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Problem1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Problem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
