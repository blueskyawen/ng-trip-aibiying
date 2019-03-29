import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlusHomeDetailComponent } from './plus-home-detail.component';

const routes: Routes = [
  {
    path: 'plus/home/:id',
    component: PlusHomeDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlusHomeDetailRoutingModule { }
