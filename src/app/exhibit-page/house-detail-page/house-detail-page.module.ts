import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { HomePageModule } from '../../home-page/home-page.module';

import { HouseDetailPageComponent } from './house-detail-page.component';
import { HouseDetailInfoComponent } from './house-detail-info.component';
import { HouseDetailAboutComponent } from './house-detail-about.component';
import { HouseDetailFatifyComponent } from './house-detail-fatify.component';
import { HouseDetailCommentComponent } from './house-detail-comment.component';

@NgModule({
  declarations: [HouseDetailPageComponent, HouseDetailInfoComponent, HouseDetailAboutComponent, HouseDetailFatifyComponent, HouseDetailCommentComponent],
  imports: [
    ShareModule, HomePageModule
  ]
})
export class HouseDetailPageModule { }
