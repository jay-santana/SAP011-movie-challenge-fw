import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 0;
  @Output() pageChanged = new EventEmitter<number>();
  // totalPagesArray: any[] = [];

  constructor() { }

  loadPreviousPage() {
    if (this.currentPage > 1) {
      // console.log(this.currentPage);
      this.currentPage--;
      this.pageChanged.emit(this.currentPage);
    }
  }

  loadNextPage() {
    if (this.currentPage < this.totalPages) {
      // console.log(this.currentPage);
      this.currentPage++;
      this.pageChanged.emit(this.currentPage);
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.pageChanged.emit(page);
  }

  loadPage(page: number) {
    this.pageChanged.emit(page);
  }

  isSelectedPage(pageNumber: number): boolean {
    return pageNumber === this.currentPage;
  }
  
}
