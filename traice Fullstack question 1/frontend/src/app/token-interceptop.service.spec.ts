import { TestBed } from '@angular/core/testing';

import { TokenInterceptopService } from './token-interceptop.service';

describe('TokenInterceptopService', () => {
  let service: TokenInterceptopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterceptopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
