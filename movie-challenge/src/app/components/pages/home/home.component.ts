import { Component, OnInit } from '@angular/core';
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

  constructor(
    private readonly _SERVICE: TmdbService
  ) { }
  ngOnInit(): void {
    this.loadMovies();
  }

  onPageChanged(page: number) {
    console.log(page);
    this.currentPage = page;
    this.loadMovies();
  }

  loadMovies() {
    this._SERVICE.getMoviesByPages(this.currentPage).subscribe({
      next: (data: any) => {
        console.log(data);
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