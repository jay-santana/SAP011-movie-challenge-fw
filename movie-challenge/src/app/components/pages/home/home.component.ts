import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 0;
  movies: any[] = [];
  genres: any[] = [];
  orderBy: any[] = [];
  moviesByGenre: any[] = [];
  selectedGenre?: string;
  selectedOrder?: string = 'popularity.desc';
  keyword?: string;

  constructor(
    private readonly _SERVICE: TmdbService,
    private readonly _ROUTE: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const queryParams = this._ROUTE.snapshot.queryParamMap;
    if (
      queryParams.get('genre') !== null &&
      queryParams.get('order') !== null &&
      queryParams.get('pageNumber') !== null
    ) { 
      this.selectedGenre = queryParams.get('genre')?.toString();
      this.selectedOrder = queryParams.get('order')?.toString();

      const pageNumberParam = queryParams.get('pageNumber');
      this.currentPage = pageNumberParam !== null ? parseInt(pageNumberParam, 10) : 1;
    }
    this.loadMovies();
    this.listMoviesGenres();
  }

  onPageChanged(page: number) {
    this.currentPage = page;
    this.loadMovies();
  }

  loadMovies() {
    const genreParam = this.selectedGenre !== '0' ? this.selectedGenre : undefined;
    const keywordParam = this.keyword ? this.keyword : undefined;

    this._SERVICE.getMoviesByPages(this.currentPage, genreParam, this.selectedOrder, keywordParam).subscribe(
      {
        next: (data: any) => {
          this.totalPages = data.total_pages;
          this.movies = data.results;
        }
      });
  }

  listMoviesGenres() {
    this._SERVICE.getMoviesByListGenre().subscribe({
      next: (data: any) => {
        this.genres = data.genres;
      }
    })
  }

  filterChanged(event: { genreId: string, orderBy: string, keyword: string }) {
    const { genreId, orderBy, keyword } = event;
    this.selectedGenre = genreId;
    this.selectedOrder = orderBy;
    this.keyword = keyword;
    this.loadMovies();
  } 
}

// Para criar automatização do número de páginas
// loadMovies(),
// loadPreviousPage(),
// loadNextPage().
