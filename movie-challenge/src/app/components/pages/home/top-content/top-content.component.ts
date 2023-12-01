import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.css']
})
export class TopContentComponent {
  @Input() genres: any[] = [];
  @Input() orderBy: any[] = [];
  @Input() moviesByGenre: any[] = [];
  @Output() filterChanged: EventEmitter<{ genreId: string, orderBy: string, keyword: string }> = new EventEmitter<{ genreId: string, orderBy: string, keyword: string }>();
  // @Output() searchRequested: EventEmitter<string> = new EventEmitter<string>();
  // @ViewChild("filter") filter!: ElementRef;

  orderByList: any[] = [
    {
      order: 'popularity.desc',
      text: 'Most Popular'
    },
    {
      order: 'popularity.asc',
      text: 'Least Popular'
    },
    {
      order: 'primary_release_date.asc',
      text: 'Latest Release Date'
    },
    {
      order: 'primary_release_date.desc',
      text: 'Earliest Release Date'
    },
    {
      order: 'vote_count.asc',
      text: 'Latest Vote'
    },
    {
      order: 'vote_count.desc',
      text: 'Mostest Vote'
    },
  ]


  selectedGenre: string = '0';
  selectedOrder: string = this.orderByList[0].order;
  keyword: string = '';

  constructor() {
  }

  optionsChange() {
    this.filterChanged.emit({
      genreId: this.selectedGenre,
      orderBy: this.selectedOrder,
      keyword: this.keyword,
    });
  }
}
