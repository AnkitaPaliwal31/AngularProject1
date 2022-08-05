import { TestBed } from '@angular/core/testing';

import { CartDataBahaivourService } from './cart-data-bahaivour.service';

describe('CartDataBahaivourService', () => {
  let service: CartDataBahaivourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartDataBahaivourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
