import { TestBed } from '@angular/core/testing';
import { CountriesvisitedService } from './countriesvisited.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CountriesvisitedService', () => {
  let service: CountriesvisitedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountriesvisitedService],
    });
    service = TestBed.inject(CountriesvisitedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});