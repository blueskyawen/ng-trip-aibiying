import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { HomePageModule } from '../../home-page/home-page.module';

import { PlusHomeDetailRoutingModule } from './plus-home-detail-routing.module';

import { PlusHomeDetailComponent } from './plus-home-detail.component';
import { HomeDetailPhotoComponent } from './home-detail-photo.component';
import { HomeDetailOverviewComponent } from './home-detail-overview.component';
import { HomeDetailContentComponent } from './home-detail-content.component';
import { HomeDetailSiteComponent } from './home-detail-site.component';
import { HomeDetailCommentComponent } from './home-detail-comment.component';
import { HomeDetailOrderComponent } from './home-detail-order.component';
import { HomeDetailRuleComponent } from './home-detail-rule.component';
import { HomeDetailLandordComponent } from './home-detail-landord.component';

@NgModule({
  declarations: [PlusHomeDetailComponent, HomeDetailPhotoComponent, HomeDetailOverviewComponent,
    HomeDetailContentComponent, HomeDetailSiteComponent, HomeDetailCommentComponent, HomeDetailOrderComponent,
    HomeDetailRuleComponent, HomeDetailLandordComponent],
  imports: [
    ShareModule, HomePageModule,
    PlusHomeDetailRoutingModule
  ]
})
export class PlusHomeDetailModule { }
