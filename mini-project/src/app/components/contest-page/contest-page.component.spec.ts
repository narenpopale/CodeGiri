import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestPageComponent } from './contest-page.component';

describe('ContestPageComponent', () => {
  let component: ContestPageComponent;
  let fixture: ComponentFixture<ContestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
