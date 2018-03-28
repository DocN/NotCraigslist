import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {PersonalSafety } from './personalSafety.component';

describe('AboutScam', () => {
  let component: PersonalSafety;
  let fixture: ComponentFixture<PersonalSafety>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalSafety ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalSafety);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
