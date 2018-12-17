import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePageComponent } from './approve-page.component';

describe('ApprovePageComponent', () => {
  let component: ApprovePageComponent;
  let fixture: ComponentFixture<ApprovePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
