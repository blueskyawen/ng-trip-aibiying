import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ExhibitPageModule } from '../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../home-page/home-page.module';
import { UserInfoModule } from './user-info/user-info.module';
import { UserDataModule } from './user-data/user-data.module';
import { UserShareModule } from './user-share/user-share.module';
import { UserWishsModule } from './user-wishs/user-wishs.module';
import { UserWorkManageModule } from './user-work-manage/user-work-manage.module';
import { PersonalCenterRoutingModule } from './personal-center-routing.module';

import { UserInviteComponent } from './user-invite.component';
import { UserTripGuideComponent } from './user-trip-guide.component';
import { MyJourneyComponent } from './my-journey.component';
import { UserDashboardComponent } from './user-dashboard.component';
import { UserInfoBoxComponent } from './user-info-box.component';

@NgModule({
  declarations: [UserInviteComponent, UserTripGuideComponent,
    MyJourneyComponent, UserDashboardComponent, UserInfoBoxComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule, UserInfoModule, UserDataModule,
    UserShareModule, UserWishsModule, UserWorkManageModule, PersonalCenterRoutingModule
  ]
})
export class PersonalCenterModule { }
