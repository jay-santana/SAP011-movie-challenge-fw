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
  queryParams: string = '';

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ a: this.genre, b: this.order });
    if (this.order || this.genre) {
      this.queryParams = `\?order=${this.order}${this.genre !== undefined ? `&genre=${this.genre}` : ``}`
    }
  }
}


// Para criar automatização do número de páginas
// loadMovies(),
// loadPreviousPage(),
// loadNextPage().



