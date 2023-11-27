import { TestBed } from '@angular/core/testing';

import { TmdbService } from './tmdb.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TmdbService', () => {
  let service: TmdbService;
  let httpTest: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
       providers: [
        TmdbService,
       ]
    });
    service = TestBed.inject(TmdbService);
    httpTest = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
