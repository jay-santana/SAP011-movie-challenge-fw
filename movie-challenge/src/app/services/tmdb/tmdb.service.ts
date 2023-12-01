import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private readonly _KEY = 'e97b1be635ac3e872cca068f724b47e1';
  private readonly _BASE_URL = `https://api.themoviedb.org/3/`;
  private readonly _APPEND = `?include_adult=false&language=en&api_key=${this._KEY}&page=`;
  private readonly _SORT = `&sort_by=`;
  private readonly _DISCOVER = `${this._BASE_URL}discover/movie${this._APPEND}`;
  private readonly _ID = `${this._BASE_URL}movie`;
  private readonly _GENRELIST = `${this._BASE_URL}genre/movie/list`;
  private readonly _SELECTGENRE = `&with_genres=`;
  private readonly _SEARCH = `&with_keywords=`;

  constructor(
    private readonly _HTTP: HttpClient
  ) { }

  getMoviesByPages(page: number, genreId?: string, orderBy?: string, keyword?: string): Observable<any> {
    return this._HTTP.get(`${this._DISCOVER}${page}${genreId?this._SELECTGENRE+`${genreId}`:``}${orderBy?this._SORT+`${orderBy}`:``}${keyword?this._SEARCH+`${keyword}`:``}`);
  }

  getMoviesById(id: number): Observable<any> {
    return this._HTTP.get(`${this._ID}/${id}?api_key=${this._KEY}`);
  }

  getMoviesByListGenre(): Observable<any> {
    return this._HTTP.get(`${this._GENRELIST}?api_key=${this._KEY}`);
  }

  getMoviesBySearch(keyword: string): Observable<any> {
    return this._HTTP.get(`${this._DISCOVER}1${this._SEARCH}${keyword}`);
  }
}
