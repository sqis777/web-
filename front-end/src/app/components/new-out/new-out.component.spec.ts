import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewOutComponent} from './new-out.component';

describe('NewOutComponent', () => {
  let component: NewOutComponent;
  let fixture: ComponentFixture<NewOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
