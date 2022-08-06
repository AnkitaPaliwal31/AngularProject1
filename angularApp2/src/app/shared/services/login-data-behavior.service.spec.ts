import { TestBed } from '@angular/core/testing';

import { LoginDataBehaviorService } from './login-data-behavior.service';

describe('LoginDataBehaviorService', () => {
  let service: LoginDataBehaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDataBehaviorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
