import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problem2Component } from './problem2.component';

describe('Problem2Component', () => {
  let component: Problem2Component;
  let fixture: ComponentFixture<Problem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Problem2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Problem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
