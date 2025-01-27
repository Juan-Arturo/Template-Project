import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslatterComponent } from './newslatter.component';

describe('NewslatterComponent', () => {
  let component: NewslatterComponent;
  let fixture: ComponentFixture<NewslatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewslatterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewslatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
