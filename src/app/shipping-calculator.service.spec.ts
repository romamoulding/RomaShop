import { TestBed, inject } from '@angular/core/testing';

import { ShippingCalculatorService } from './shipping-calculator.service';

describe('ShippingCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShippingCalculatorService]
    });
  });

  it('should be created', inject([ShippingCalculatorService], (service: ShippingCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
