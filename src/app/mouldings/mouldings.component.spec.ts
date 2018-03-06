import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouldingsComponent } from './mouldings.component';

describe('MouldingsComponent', () => {
  let component: MouldingsComponent;
  let fixture: ComponentFixture<MouldingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouldingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouldingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
