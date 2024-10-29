import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrestComponent } from './intrest.component';

describe('IntrestComponent', () => {
  let component: IntrestComponent;
  let fixture: ComponentFixture<IntrestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntrestComponent]
    });
    fixture = TestBed.createComponent(IntrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
