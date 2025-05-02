import { TestBed } from '@angular/core/testing';

import { CountriesvisitedService } from './countriesvisited.service';

describe('CountriesvisitedService', () => {
  let service: CountriesvisitedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesvisitedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
