import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Movie } from '../models/movie';
import { OmdbService } from './omdb.service';

describe('OmdbService', () => {
  let service: OmdbService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OmdbService],
    });
    service = TestBed.inject(OmdbService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform a GET request to the OMDb API and return search results', () => {
    const dummyMovies: Movie[] = [
      {
        Title: 'Test Movie 1',
        Year: '2020',
        imdbID: '1',
        Type: 'movie',
        Poster: '',
      },
      {
        Title: 'Test Movie 2',
        Year: '2021',
        imdbID: '2',
        Type: 'movie',
        Poster: '',
      },
    ];

    service.filter('test').subscribe((movies) => {
      expect(movies.length).toBe(2);
      expect(movies).toEqual(dummyMovies);
    });

    const request = httpMock.expectOne(
      `https://www.omdbapi.com/?apikey=e10e5e36&type=movie&s=test`
    );
    expect(request.request.method).toBe('GET');
    request.flush({ Search: dummyMovies });
  });
});
