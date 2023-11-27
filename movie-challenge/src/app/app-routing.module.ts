import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'movie-details/:id',
      loadChildren: () => import('./components/pages/movie-details/movie-details.module').then(m => m.MovieDetailsModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
