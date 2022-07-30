import { TestBed } from '@angular/core/testing';

import { DataBehaviorService } from './data-behavior.service';

describe('DataBehaviorService', () => {
  let service: DataBehaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBehaviorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
