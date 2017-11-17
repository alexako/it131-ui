import { TestBed, inject } from '@angular/core/testing';

import { ZomatoApiService } from './zomato-api.service';

describe('ZomatoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZomatoApiService]
    });
  });

  it('should be created', inject([ZomatoApiService], (service: ZomatoApiService) => {
    expect(service).toBeTruthy();
  }));
});
