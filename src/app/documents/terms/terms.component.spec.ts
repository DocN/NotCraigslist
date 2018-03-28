import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {Terms } from './terms.component';

describe('AboutScam', () => {
  let component: Terms;
  let fixture: ComponentFixture<Terms>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Terms ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Terms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
