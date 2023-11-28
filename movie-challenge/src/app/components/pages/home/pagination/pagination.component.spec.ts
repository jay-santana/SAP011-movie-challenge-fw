import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
    });
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit pageChanged event when loadPage is called', () => {
    const page = 2;
    spyOn(component.pageChanged, 'emit');
    
    component.loadPage(page);

    expect(component.pageChanged.emit).toHaveBeenCalledWith(page);
  });

  it('should decrement currentPage and emit pageChanged event when loadPreviousPage is called', () => {
    component.currentPage = 3;
    spyOn(component.pageChanged, 'emit');

    component.loadPreviousPage();

    expect(component.currentPage).toBe(2);
    expect(component.pageChanged.emit).toHaveBeenCalledWith(2);
  });

  it('should increment currentPage and emit pageChanged event when loadNextPage is called', () => {
    component.currentPage = 3;
    component.totalPages = 5;
    spyOn(component.pageChanged, 'emit');

    component.loadNextPage();

    expect(component.currentPage).toBe(4);
    expect(component.pageChanged.emit).toHaveBeenCalledWith(4);
  });

  it('should set currentPage and emit pageChanged event when goToPage is called', () => {
    const page = 3;
    spyOn(component.pageChanged, 'emit');

    component.goToPage(page);

    expect(component.currentPage).toBe(page);
    expect(component.pageChanged.emit).toHaveBeenCalledWith(page);
  });

  it('should return true when isSelectedPage is called with the current page number', () => {
    const isSelected = component.isSelectedPage(component.currentPage);
    expect(isSelected).toBe(true);
  });

  it('should return false when isSelectedPage is called with a different page number', () => {
    const isSelected = component.isSelectedPage(component.currentPage + 1);
    expect(isSelected).toBe(false);
  });
});
