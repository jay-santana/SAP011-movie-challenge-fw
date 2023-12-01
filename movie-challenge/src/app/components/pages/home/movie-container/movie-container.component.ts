import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css']
})
export class MovieContainerComponent implements OnChanges {
  @Input() movies: any[] = [];
  @Input() genre: string | undefined = '';
  @Input() order: string | undefined = '';
  @Input() pageNumber: string | undefined = '';
  queryParams: any = {};

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.order || this.genre) {
      this.queryParams = {
        order: this.order,
        genre: this.genre,
        pageNumber: this.pageNumber
      }
    }
  }
}


// Para criar automatização do número de páginas
// loadMovies(),
// loadPreviousPage(),
// loadNextPage().



