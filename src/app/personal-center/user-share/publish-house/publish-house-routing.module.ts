import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublishHouseComponent } from './publish-house.component';

const routes: Routes = [
  {
    path: 'selfCenter/share/publishHouse',
    component: PublishHouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishHouseRoutingModule { }
