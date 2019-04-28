import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserWorkManageComponent } from './user-work-manage.component';

const routes: Routes = [
  {
    path: 'selfCenter/workManage',
    component: UserWorkManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserWorkManageRoutingModule { }
