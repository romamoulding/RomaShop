import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouldingFiltersComponent } from './moulding-filters.component';

describe('MouldingFiltersComponent', () => {
  let component: MouldingFiltersComponent;
  let fixture: ComponentFixture<MouldingFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouldingFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouldingFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
