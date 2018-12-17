import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveLeaveCardComponent } from './approve-leave-card.component';

describe('ApproveLeaveCardComponent', () => {
  let component: ApproveLeaveCardComponent;
  let fixture: ComponentFixture<ApproveLeaveCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveLeaveCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveLeaveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
