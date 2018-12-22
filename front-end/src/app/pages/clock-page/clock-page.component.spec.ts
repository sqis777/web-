import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClockPageComponent} from './clock-page.component';

describe('ClockPageComponent', () => {
  let component: ClockPageComponent;
  let fixture: ComponentFixture<ClockPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
