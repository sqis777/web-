import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualPageComponent } from './annual-page.component';

describe('AnnualPageComponent', () => {
  let component: AnnualPageComponent;
  let fixture: ComponentFixture<AnnualPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
