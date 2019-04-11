import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { ExhibitPageModule } from '../../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../../home-page/home-page.module';
import { UserInfoRoutingModule } from './user-info-routing.module';

import { UserShowComponent } from './user-show.component';
import { UserEditComponent } from './user-edit.component';

@NgModule({
  declarations: [UserShowComponent, UserEditComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule, UserInfoRoutingModule
  ]
})
export class UserInfoModule { }
