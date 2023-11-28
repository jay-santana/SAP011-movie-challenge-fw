import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieContainerComponent } from './movie-container.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('MovieContainerComponent', () => {
  let component: MovieContainerComponent;
  let fixture: ComponentFixture<MovieContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [MovieContainerComponent],
    });
    fixture = TestBed.createComponent(MovieContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display movies correctly', () => {
    const movies = [
      { id: 1, title: 'Movie 1', poster_path: '/poster1.jpg', release_date: '2022-01-01' },
      { id: 2, title: 'Movie 2', release_date: '2022-02-02' },
    ];
    component.movies = movies;
    fixture.detectChanges();

    const movieElements = fixture.debugElement.queryAll(By.css('.cards'));
    expect(movieElements.length).toBe(2);

    expect(movieElements[0].query(By.css('#title')).nativeElement.textContent).toContain('Movie 1');
    expect(movieElements[1].query(By.css('#title')).nativeElement.textContent).toContain('Movie 2');
  });

  it('should set queryParams when genre and orderBy are provided', () => {
    component.genre = 'Action';
    component.order = 'popularity.desc';
    component.pageNumber = '1';
    component.ngOnChanges({
      genre: { currentValue: 'Action', previousValue: undefined, isFirstChange: () => true, firstChange: false },
      order: { currentValue: 'popularity.desc', previousValue: undefined, isFirstChange: () => true, firstChange: false },
      pageNumber: { currentValue: '1', previousValue: undefined, isFirstChange: () => true, firstChange: false }
    });

    expect(component.queryParams).toEqual({
      order: 'popularity.desc',
      genre: 'Action',
      pageNumber: '1'
    });
  });

  it('should set queryParams when only genre is provided', () => {
    component.genre = 'Drama';
    component.ngOnChanges({
      genre: { currentValue: 'Drama', previousValue: undefined, isFirstChange: () => true, firstChange: false }
    });

    expect(component.queryParams).toEqual({
      order: '',
      genre: 'Drama',
      pageNumber: ''
    });
  });

  it('should set queryParams when only orderBy is provided', () => {
    component.order = 'vote_average.desc';
    component.ngOnChanges({
      order: { currentValue: 'vote_average.desc', previousValue: undefined, isFirstChange: () => true, firstChange: false }
    });

    expect(component.queryParams).toEqual({
      order: 'vote_average.desc',
      genre: '',
      pageNumber: ''
    });
  });

});
