import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardnavbarComponent } from './standardnavbar.component';

describe('StandardnavbarComponent', () => {
  let component: StandardnavbarComponent;
  let fixture: ComponentFixture<StandardnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
