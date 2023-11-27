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
  keyWord?: string;

  constructor(
    private readonly _SERVICE: TmdbService,
    private readonly _ROUTE: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const queryParams = this._ROUTE.snapshot.queryParamMap;
    if (
      queryParams.get('genre') !== undefined &&
      queryParams.get('order') !== undefined &&
      queryParams.get('pageNumber') !== undefined
    ) {
      this.selectedGenre = queryParams.get('genre')?.toString();
      this.selectedOrder = queryParams.get('order')?.toString();

      const pageNumberParam = queryParams.get('pageNumber');
      this.currentPage = pageNumberParam !== null ? parseInt(pageNumberParam, 10) : 1;
    }
    this.loadMovies();
    this.listMoviesGenres();
  }

  // const queryParams = this._ROUTE.snapshot.queryParamMap;
  // const genreParam = queryParams.get('genre');
  // const orderParam = queryParams.get('order');
  // const pageNumberParam = queryParams.get('pageNumber');

  // if (genreParam !== null) {
  //   this.selectedGenre = genreParam.toString();
  // }

  // if (orderParam !== null) {
  //   this.selectedOrder = orderParam.toString();
  // }

  // if (pageNumberParam !== null) {
  //   const parsedPageNumber = parseInt(pageNumberParam, 10);
  //   this.currentPage = isNaN(parsedPageNumber) ? 1 : parsedPageNumber;
  // }

  onPageChanged(page: number) {
    console.log(page);
    this.currentPage = page;
    this.loadMovies();
    // this.listMoviesOrder();
  }

  loadMovies() {
    const genreParam = this.selectedGenre !== '0' ? this.selectedGenre : undefined;
    const keywordParam = this.keyWord ? this.keyWord : undefined;

    this._SERVICE.getMoviesByPages(this.currentPage, genreParam, this.selectedOrder, keywordParam).subscribe(
      {
        next: (data: any) => {
          console.log("Load movies: ", data);
          this.totalPages = data.total_pages;
          this.movies = data.results;
        }
      });
  }

  loadMoviesWithGenre() {
    this._SERVICE.getMoviesByPages(this.currentPage, this.selectedGenre).subscribe({
      next: (data: any) => {
        console.log(data);
        this.totalPages = data.total_pages;
        this.movies = data.results;
        console.log(this.currentPage, this.selectedGenre)
      }
    })
  }

  listMoviesGenres() {
    this._SERVICE.getMoviesByListGenre().subscribe({
      next: (data: any) => {
        console.log(data);
        this.genres = data.genres;
      }
    })
  }

  listMoviesOrder(sortBy: string) {
    sortBy = sortBy || 'popularity.desc';
    this._SERVICE.getMoviesByOrder(sortBy).subscribe({
      next: (data: any) => {
        console.log('listMoviesOrder', data);
        this.orderBy = data.results;
        // this.loadMovies();
      }
    });
  }

  filterChanged(event: { genreId: string, orderBy: string, keyWord: string }) {
    console.log('Filter Changed in HomeComponent', event);
    const { genreId, orderBy, keyWord } = event;
    this.selectedGenre = genreId;
    this.selectedOrder = orderBy;
    this.keyWord = keyWord;
    this.loadMovies();
    // this.listMoviesOrder();
  }

  showMoviesWithGenre(genreId: string) {
    this._SERVICE.getMoviesByGenre(genreId).subscribe({
      next: (data: any) => {
        this.moviesByGenre = data.results;
        console.log('getMoviesWitGender', data);
        this.totalPages = data.total_pages;
        this.movies = data.results;
      }
    })
  }




}

// Para criar automatização do número de páginas
// loadMovies(),
// loadPreviousPage(),
// loadNextPage().

// onGenreSelected(genreId: number) {
//   this.selectedGenreId = genreId;
//   this.loadMovies();
// }

// onOrderSelected(orderBy: string) {
//   this.selectedOrderBy = orderBy;
//   this.loadMovies();
// }

// onGenderChanged(genreId: number) {
//   console.log('onGenderChanged called with genreId:', genreId);
//   this.filterChanged({ genreId, orderBy: this.selectedOrderBy || 'popularity.desc' });
// }

// selectGenre(event: any) {
//   console.log('select Genre',event);
//   this.selectedGenre = Number(event);
//   this.showMoviesWithGenre(Number(event));
// }

// listMoviesOrder() {
//   this._SERVICE.getMoviesByOrder(this.selectedOrder).subscribe({
//     next: (data: any) => {
//       console.log(data);
//       this.movies = data.results;
//       // this.loadMovies();
//     }
//   });
// }

// showMoviesWithGenre(genreId?: number) {
//   this._SERVICE.getMoviesByGenre(genreId).subscribe({
//     next: (data: any) => {
//       this.moviesByGenre = data.results;
//       console.log('getMoviesWitGender', data);
//       this.totalPages = data.total_pages;
//       this.movies = data.results;
//     }
//   })
// }

// loadMovies() {
//   this._SERVICE.getMoviesByPages(this.currentPage, this.selectedGenre ?this.selectedGenre: undefined, this.selectedOrder, this.keyWord ?this.keyWord: undefined).subscribe({
//     next: (data: any) => {
//       console.log(data);
//       this.totalPages = data.total_pages;
//       this.movies = data.results;
//     }
//   })
// }