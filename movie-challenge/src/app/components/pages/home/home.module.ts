import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TopContentComponent } from './top-content/top-content.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MovieContainerComponent } from './movie-container/movie-container.component';


@NgModule({
  declarations: [
    HomeComponent,
    TopContentComponent,
    PaginationComponent,
    MovieContainerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]

})
export class HomeModule { }
