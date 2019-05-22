import { TestBed } from '@angular/core/testing';

import { YelpserviceService } from './yelpservice.service';

describe('YelpserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YelpserviceService = TestBed.get(YelpserviceService);
    expect(service).toBeTruthy();
  });
});
