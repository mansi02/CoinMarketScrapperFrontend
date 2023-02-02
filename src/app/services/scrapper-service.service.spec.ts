import { TestBed } from '@angular/core/testing';

import { ScrapperServiceService } from './scrapper-service.service';

describe('ScrapperServiceService', () => {
  let service: ScrapperServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrapperServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
