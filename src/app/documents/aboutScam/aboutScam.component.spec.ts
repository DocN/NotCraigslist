import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {AboutScam } from './aboutScam.component';

describe('AboutScam', () => {
  let component: AboutScam;
  let fixture: ComponentFixture<AboutScam>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutScam ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutScam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
