import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouldingSearchComponent } from './moulding-search.component';

describe('MouldingSearchComponent', () => {
  let component: MouldingSearchComponent;
  let fixture: ComponentFixture<MouldingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouldingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouldingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
