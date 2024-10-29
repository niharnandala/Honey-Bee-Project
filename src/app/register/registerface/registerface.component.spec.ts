import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterfaceComponent } from './registerface.component';

describe('RegisterfaceComponent', () => {
  let component: RegisterfaceComponent;
  let fixture: ComponentFixture<RegisterfaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterfaceComponent]
    });
    fixture = TestBed.createComponent(RegisterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
