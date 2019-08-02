import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { HomePageModule } from '../../home-page/home-page.module';
import { BaiduMapModule } from 'angular2-baidu-map';

import { HouseDetailPageComponent } from './house-detail-page.component';
import { HouseDetailInfoComponent } from './house-detail-info.component';
import { HouseDetailAboutComponent } from './house-detail-about.component';
import { HouseDetailFatifyComponent } from './house-detail-fatify.component';
import { HouseDetailCommentComponent } from './house-detail-comment.component';
import { HouseDetailOrderComponent } from './house-detail-order.component';
import { HouseDetailSiteComponent } from './house-detail-site.component';

@NgModule({
  declarations: [HouseDetailPageComponent, HouseDetailInfoComponent, HouseDetailAboutComponent,
    HouseDetailFatifyComponent, HouseDetailCommentComponent, HouseDetailOrderComponent,
    HouseDetailSiteComponent],
  imports: [
    ShareModule, HomePageModule, BaiduMapModule
  ]
})
export class HouseDetailPageModule { }
