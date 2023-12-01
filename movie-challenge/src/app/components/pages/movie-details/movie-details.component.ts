import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie?: any;
  movieLoaded: boolean = false;
  genre?: string = '';
  order?: string = '';
  pageNumber?: string = '';

  constructor(
    private readonly _SERVICE: TmdbService,
    private readonly _ROUTE: ActivatedRoute,
    private readonly _SPINNER: NgxSpinnerService
  ) {
    this._SPINNER.show();
  }

  ngOnInit(): void {
    this.genre = this._ROUTE.snapshot.queryParamMap.get('genre')?.toString();
    this.order = this._ROUTE.snapshot.queryParamMap.get('order')?.toString();
    this.pageNumber = this._ROUTE.snapshot.queryParamMap.get('pageNumber')?.toString();
    this.getMoviesDetails();
  }

  getMoviesDetails() {
    const movieId = Number(this._ROUTE.snapshot.paramMap.get('id'));
    this._SERVICE.getMoviesById(movieId).subscribe(data => {
      this.movie = data;
      setTimeout(() => {
        this._SPINNER.hide();
        this.movieLoaded = true;
      }, 500);
    })
  }
}
