import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlusHomeViewComponent} from './plus-home-view.component';

const routes: Routes = [
  {
    path: 'plus/view',
    component: PlusHomeViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlusHomeViewRoutingModule { }
