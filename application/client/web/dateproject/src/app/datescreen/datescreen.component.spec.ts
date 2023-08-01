import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatescreenComponent } from './datescreen.component';

describe('DatescreenComponent', () => {
  let component: DatescreenComponent;
  let fixture: ComponentFixture<DatescreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatescreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});