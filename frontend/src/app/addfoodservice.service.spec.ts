import { TestBed } from '@angular/core/testing';

import { AddfoodserviceService } from './addfoodservice.service';

describe('AddfoodserviceService', () => {
  let service: AddfoodserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddfoodserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
