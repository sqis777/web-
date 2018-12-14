import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooutPageComponent } from './goout-page.component';

describe('GooutPageComponent', () => {
  let component: GooutPageComponent;
  let fixture: ComponentFixture<GooutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
