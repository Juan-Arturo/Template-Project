import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIUComponent } from './login-iu.component';

describe('LoginIUComponent', () => {
  let component: LoginIUComponent;
  let fixture: ComponentFixture<LoginIUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginIUComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginIUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
