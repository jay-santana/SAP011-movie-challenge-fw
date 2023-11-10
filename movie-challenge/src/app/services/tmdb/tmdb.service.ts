import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private readonly _URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en&api_key=e97b1be635ac3e872cca068f724b47e1&page='
  
  constructor(
    private readonly _HTTP: HttpClient
  ) { }

  getMoviesByPages(page: number): Observable<any> {
    return this._HTTP.get(`${this._URL}${page}`)
  }
}
