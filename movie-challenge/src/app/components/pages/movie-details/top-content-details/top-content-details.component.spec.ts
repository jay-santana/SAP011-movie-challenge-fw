import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopContentDetailsComponent } from './top-content-details.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TopContentDetailsComponent', () => {
  let component: TopContentDetailsComponent;
  let fixture: ComponentFixture<TopContentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopContentDetailsComponent],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(TopContentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
