import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistertraditionalComponent } from './registertraditional.component';

describe('RegistertraditionalComponent', () => {
  let component: RegistertraditionalComponent;
  let fixture: ComponentFixture<RegistertraditionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistertraditionalComponent]
    });
    fixture = TestBed.createComponent(RegistertraditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
