import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublishHouseComponent } from './publish-house.component';
import { CanDeactivateGuard } from '../../../core/can-deactivate.guard';

const routes: Routes = [
  {
    path: 'selfCenter/share/publishHouse',
    component: PublishHouseComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishHouseRoutingModule { }
