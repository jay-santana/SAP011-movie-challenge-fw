import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.css']
})
export class TopContentComponent {
  @Input() genres: any[] = [];
  @Input() orderBy: any[] = [];
  @Input() moviesByGenre: any[] = [];
  @Output() filterChanged: EventEmitter<{ genreId: string, orderBy: string, keyWord: string }> = new EventEmitter<{ genreId: string, orderBy: string, keyWord: string }>();
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
  keyWord: string = '';

  // selectedGenre?: any = 0;
  // selectedOrder?: any = this.orderByList[0].order;

  constructor() {
  }

  optionsChange() {
    console.log(`${this.selectedGenre} - ${this.selectedOrder}`);
    this.filterChanged.emit({
      genreId: this.selectedGenre,
      orderBy: this.selectedOrder,
      keyWord: this.keyWord,
    });
    // console.log('evento', event.target.value);
  }



  // optionsChange(event: any) {
  //   console.log(`${this.selectedGenre} - ${this.selectedOrder}`);
  //   this.filterChanged.emit({
  //     genreId: this.selectedGenre,
  //     orderBy: this.selectedOrder
  //   });
  // }

  // selectGenre(event: any) {
  //   console.log('select Genre',event);
  //   this.selectedGenre = Number(event);
  //   this.showMoviesWithGenre(Number(event));
  // }
}

// genreChange() {
//   this.filterChanged.emit();
// }
// orderChange() {
//   this.filterChanged.emit();
// }

// genreChange(event: Event) {
//   console.log('Gender Change Called');
//   this.selectedGenre = +(event.target as HTMLSelectElement).value;
//   this.filterChanged.emit({
//     genreId: this.selectedGenre,
//     orderBy: 'popularity.desc'
//   });
// }

// orderChange(event: Event) {
//   console.log('Order Change Called');
//   this.selectedOrder = (event.target as HTMLSelectElement).value;
//   this.emitFilterChanged();
// }

// emitFilterChanged() {
//   console.log('Emitting Filter Changed Event');
//   this.filterChanged.emit({ genreId: this.selectedGenre || 0, orderBy: this.selectedOrder || '' });
// }