import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopContentComponent } from './top-content.component';
import { FormsModule } from '@angular/forms';

describe('TopContentComponent', () => {
  let component: TopContentComponent;
  let fixture: ComponentFixture<TopContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopContentComponent],
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
});
