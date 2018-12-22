import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GooutPageCardComponent} from './goout-page-card.component';

describe('GooutPageCardComponent', () => {
  let component: GooutPageCardComponent;
  let fixture: ComponentFixture<GooutPageCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooutPageCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooutPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
