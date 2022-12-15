import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostContestComponent } from './host-contest.component';

describe('HostContestComponent', () => {
  let component: HostContestComponent;
  let fixture: ComponentFixture<HostContestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostContestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
