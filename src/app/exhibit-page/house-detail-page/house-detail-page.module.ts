import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { HomePageModule } from '../../home-page/home-page.module';

import { HouseDetailPageComponent } from './house-detail-page.component';

@NgModule({
  declarations: [HouseDetailPageComponent],
  imports: [
    ShareModule, HomePageModule
  ]
})
export class HouseDetailPageModule { }
