import { TestBed, inject } from '@angular/core/testing';

import { MouldingService } from './moulding.service';

describe('MouldingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MouldingService]
    });
  });

  it('should be created', inject([MouldingService], (service: MouldingService) => {
    expect(service).toBeTruthy();
  }));
});
