import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { ExhibitPageModule } from '../../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../../home-page/home-page.module';

import { UserWorkManageRoutingModule } from './user-work-manage-routing.module';

import { UserWorkManageComponent } from './user-work-manage.component';
import { WorkManagePokComponent } from './work-manage-pok.component';
import { WorkManageActivityComponent } from './work-manage-activity.component';
import { WorkManageTextComponent } from './work-manage-text.component';
import { WorkManageMartComponent } from './work-manage-mart.component';
import { WorkManageContactComponent } from './work-manage-contact.component';

@NgModule({
  declarations: [UserWorkManageComponent, WorkManagePokComponent, WorkManageActivityComponent,
    WorkManageTextComponent, WorkManageMartComponent, WorkManageContactComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule,
    UserWorkManageRoutingModule
  ]
})
export class UserWorkManageModule { }
