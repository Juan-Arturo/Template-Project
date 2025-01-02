import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoterVdaComponent } from './foter-vda.component';

describe('FoterVdaComponent', () => {
  let component: FoterVdaComponent;
  let fixture: ComponentFixture<FoterVdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoterVdaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoterVdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
