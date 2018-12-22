import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ApproveGoOutPageCardComponent} from './approve-go-out-page-card.component';

describe('ApproveGoOutPageCardComponent', () => {
  let component: ApproveGoOutPageCardComponent;
  let fixture: ComponentFixture<ApproveGoOutPageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveGoOutPageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveGoOutPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
