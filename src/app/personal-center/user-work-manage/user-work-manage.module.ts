import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { ExhibitPageModule } from '../../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../../home-page/home-page.module';

import { UserWorkManageRoutingModule } from './user-work-manage-routing.module';

import { UserWorkManageComponent } from './user-work-manage.component';

@NgModule({
  declarations: [UserWorkManageComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule,
    UserWorkManageRoutingModule
  ]
})
export class UserWorkManageModule { }
