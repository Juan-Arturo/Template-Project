import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslatterTwoComponent } from './newslatter-two.component';

describe('NewslatterTwoComponent', () => {
  let component: NewslatterTwoComponent;
  let fixture: ComponentFixture<NewslatterTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewslatterTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewslatterTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
