import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogintraditionalComponent } from './logintraditional.component';

describe('LogintraditionalComponent', () => {
  let component: LogintraditionalComponent;
  let fixture: ComponentFixture<LogintraditionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogintraditionalComponent]
    });
    fixture = TestBed.createComponent(LogintraditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
