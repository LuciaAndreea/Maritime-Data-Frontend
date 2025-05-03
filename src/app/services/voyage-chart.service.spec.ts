import { TestBed } from '@angular/core/testing';

import { VoyageChartService } from './voyage-chart.service';

describe('VoyageChartService', () => {
  let service: VoyageChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoyageChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
