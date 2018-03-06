import { TestBed, inject } from '@angular/core/testing';

import { SapService } from './sap.service';

describe('SapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SapService]
    });
  });

  it('should be created', inject([SapService], (service: SapService) => {
    expect(service).toBeTruthy();
  }));
});
