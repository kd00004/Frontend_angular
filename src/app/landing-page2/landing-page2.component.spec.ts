import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPage2Component } from './landing-page2.component';

describe('LandingPage2Component', () => {
  let component: LandingPage2Component;
  let fixture: ComponentFixture<LandingPage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPage2Component]
    });
    fixture = TestBed.createComponent(LandingPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
