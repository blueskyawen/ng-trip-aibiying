import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExhibitPageComponent } from './exhibit-page.component';
import { PlayListPageComponent } from './play-list-page.component';

const routes: Routes = [
  {
    path: 'exhibit',
    component: ExhibitPageComponent,
    children: [
      {
        path: 'playlist/:id',
        component: PlayListPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitPageRoutingModule { }
