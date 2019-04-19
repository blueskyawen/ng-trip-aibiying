import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowShareComponent } from './know-share.component';

const routes: Routes = [
  {
    path: 'selfCenter/share/know',
    component: KnowShareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowShareRoutingModule { }
