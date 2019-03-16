import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExhibitPageComponent } from './exhibit-page.component';

const routes: Routes = [
  {
    path: 'exhibit',
    component: ExhibitPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExhibitPageRoutingModule { }
