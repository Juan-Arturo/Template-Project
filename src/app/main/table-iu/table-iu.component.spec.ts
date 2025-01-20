import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableIUComponent } from './table-iu.component';

describe('TableIUComponent', () => {
  let component: TableIUComponent;
  let fixture: ComponentFixture<TableIUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableIUComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableIUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
