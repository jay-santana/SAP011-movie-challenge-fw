import { Component, Input } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb/tmdb.service';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css']
})
export class MovieContainerComponent {
  @Input() movies: any[] = [];

  constructor() {}
}

 // Para criar automatização do número de páginas
  // loadMovies(),
  // loadPreviousPage(),
  // loadNextPage().

  
 
  