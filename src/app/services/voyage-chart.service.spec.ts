import { TestBed } from '@angular/core/testing';
import { VoyageChartService } from './voyage-chart.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('VoyageChartService', () => {
  let service : VoyageChartService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VoyageChartService],
    });
    service = TestBed.inject(VoyageChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});