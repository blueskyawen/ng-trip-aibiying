import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { ExhibitPageModule } from '../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../home-page/home-page.module';
import { UserInfoModule } from './user-info/user-info.module';
import { UserDataModule } from './user-data/user-data.module';
import { UserShareModule } from './user-share/user-share.module';
import { PersonalCenterRoutingModule } from './personal-center-routing.module';

import { UserInviteComponent } from './user-invite.component';
import { UserTripGuideComponent } from './user-trip-guide.component';
import { UserWorkManageComponent } from './user-work-manage.component';
import { MyJourneyComponent } from './my-journey.component';
import { UserDashboardComponent } from './user-dashboard.component';
import { UserInfoBoxComponent } from './user-info-box.component';
import { UserWishsComponent } from './user-wishs.component';

@NgModule({
  declarations: [UserInviteComponent, UserTripGuideComponent, UserWorkManageComponent,
    MyJourneyComponent, UserDashboardComponent, UserInfoBoxComponent, UserWishsComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule, UserInfoModule, UserDataModule,
    UserShareModule, PersonalCenterRoutingModule
  ]
})
export class PersonalCenterModule { }
