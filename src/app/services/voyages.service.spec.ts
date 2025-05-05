import { TestBed } from '@angular/core/testing';
import { VoyagesService } from './voyages.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('VoyagesService', () => {
  let service : VoyagesService;
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VoyagesService],
    });
    service = TestBed.inject(VoyagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});