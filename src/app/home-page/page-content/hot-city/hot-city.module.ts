import { NgModule } from '@angular/core';
import { ShareModule } from '../../../share/share.module';
import { PageHotCityComponent } from './page-hot-city.component';
import { HotCityHouseComponent } from './hot-city-house.component';

@NgModule({
  declarations: [PageHotCityComponent, HotCityHouseComponent],
  imports: [
    ShareModule
  ],
  exports: [PageHotCityComponent]
})
export class HotCityModule { }
