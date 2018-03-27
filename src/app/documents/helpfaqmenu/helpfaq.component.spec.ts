import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HelpfaqComponent } from './helpfaq.component';

describe('HelpfaqComponent', () => {
  let component: HelpfaqComponent;
  let fixture: ComponentFixture<HelpfaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpfaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
