import { TestBed } from '@angular/core/testing';
import { PortsService } from './ports.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('PortsService', () => {
  let service: PortsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PortsService],
    });
    service = TestBed.inject(PortsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});