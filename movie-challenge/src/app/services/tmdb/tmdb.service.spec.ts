import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TmdbService } from './tmdb.service';

describe('TmdbService', () => {
  let service: TmdbService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TmdbService]
    });
    service = TestBed.inject(TmdbService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get movies by page', () => {
    const dummyPage = 1;
    const dummyResponse = { results: [], total_pages: 1 };

    service.getMoviesByPages(dummyPage).subscribe((response) => {
      expect(response).toEqual(dummyResponse);
    });

    const req = httpTestingController.expectOne(`${service['_DISCOVER']}${dummyPage}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });

});
