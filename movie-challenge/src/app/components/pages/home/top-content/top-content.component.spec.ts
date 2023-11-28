import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { TopContentComponent } from './top-content.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('TopContentComponent', () => {
  let component: TopContentComponent;
  let fixture: ComponentFixture<TopContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopContentComponent
      ],
      imports: [
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(TopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filterChanged event when genre selection changes', fakeAsync(() => {
    spyOn(component.filterChanged, 'emit');
    const selectGenre = fixture.debugElement.query(By.css('#filter-genre'));
    selectGenre.triggerEventHandler('change', {});
    tick();
    expect(component.filterChanged.emit).toHaveBeenCalledOnceWith({
      genreId: component.selectedGenre,
      orderBy: component.selectedOrder,
      keyword: component.keyword
    });
  }));

  it('should emit filterChanged event when order selection changes', fakeAsync(() => {
    spyOn(component.filterChanged, 'emit');
    const selectOrder = fixture.debugElement.query(By.css('#order'));
    selectOrder.triggerEventHandler('change', {});
    tick();
    expect(component.filterChanged.emit).toHaveBeenCalledOnceWith({
      genreId: component.selectedGenre,
      orderBy: component.selectedOrder,
      keyword: component.keyword
    });
  }));

  // it('should emit filterChanged event when input keyword changes', fakeAsync(() => {
  //   spyOn(component.filterChanged, 'emit');
  //   const inputKeyword = fixture.debugElement.query(By.css('#search'));
  //   inputKeyword.nativeElement.value = 'Test Search';
  //   inputKeyword.nativeElement.dispatchEvent(new Event('input'));
  //   fixture.detectChanges();
  //   tick();
  //   expect(component.filterChanged.emit).toHaveBeenCalledOnceWith({
  //     genreId: component.selectedGenre,
  //     orderBy: component.selectedOrder,
  //     keyword: 'Test Search'
  //   });
  // }));
})
