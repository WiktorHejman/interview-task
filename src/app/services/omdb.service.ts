import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, MovieApiResponse } from '../models/movie';

@Injectable()
export class OmdbService {
  constructor(private readonly http: HttpClient) {}
  private apiKey = 'e10e5e36';

  filter(val: string): Observable<Movie[]> {
    return this.http
      .get<MovieApiResponse>(
        `https://www.omdbapi.com/?apikey=${this.apiKey}&type=movie&s=${val}`
      )
      .pipe(map((response) => response.Search));
  }
}
