import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashpostingComponent } from './dashposting.component';

describe('DashpostingComponent', () => {
  let component: DashpostingComponent;
  let fixture: ComponentFixture<DashpostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashpostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashpostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
