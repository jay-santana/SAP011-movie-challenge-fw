import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsComponent } from './movie-details.component';
import { TopContentDetailsComponent } from './top-content-details/top-content-details.component';
import { DetailsContainerComponent } from './details-container/details-container.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    MovieDetailsComponent,
    TopContentDetailsComponent,
    DetailsContainerComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    NgxSpinnerModule.forRoot({type: 'ball-scale-multiple'}),
  ],
  exports: [
    MovieDetailsComponent
  ]
})
export class MovieDetailsModule { }
