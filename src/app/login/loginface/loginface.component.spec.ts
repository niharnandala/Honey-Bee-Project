import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginfaceComponent } from './loginface.component';

describe('LoginfaceComponent', () => {
  let component: LoginfaceComponent;
  let fixture: ComponentFixture<LoginfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginfaceComponent]
    });
    fixture = TestBed.createComponent(LoginfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
