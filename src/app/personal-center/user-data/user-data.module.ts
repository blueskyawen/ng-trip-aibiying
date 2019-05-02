import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { ExhibitPageModule } from '../../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../../home-page/home-page.module';
import { UserDataRoutingModule } from './user-data-routing.module';
import { UserDataComponent } from './user-data.component';
import { UserNotifyComponent } from './user-notify.component';
import { UserPaymentComponent } from './user-payment.component';
import { UserPayoutComponent } from './user-payout.component';
import { UserPrivacyComponent } from './user-privacy.component';
import { UserAppsComponent } from './user-apps.component';
import { UserBadgeComponent } from './user-badge.component';

@NgModule({
  declarations: [UserDataComponent, UserNotifyComponent, UserPaymentComponent, UserPayoutComponent,
    UserPrivacyComponent, UserAppsComponent, UserBadgeComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule, UserDataRoutingModule
  ]
})
export class UserDataModule { }
