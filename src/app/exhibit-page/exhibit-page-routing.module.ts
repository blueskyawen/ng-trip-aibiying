import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExhibitPageComponent } from './exhibit-page.component';
import { PlayListPageComponent } from './play-list-page/play-list-page.component';
import { HouseListPageComponent } from './house-list-page/house-list-page.component';

const routes: Routes = [
  {
    path: 'exhibit',
    component: ExhibitPageComponent,
    children: [
      {
        path: 'playlist/:id',
        component: PlayListPageComponent
      },
      {
        path: 'houselist/:city',
        component: HouseListPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitPageRoutingModule { }
