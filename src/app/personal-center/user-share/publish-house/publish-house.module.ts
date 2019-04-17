import { NgModule } from '@angular/core';
import { ShareModule } from '../../../share/share.module';
import { ExhibitPageModule } from '../../../exhibit-page/exhibit-page.module';
import { HomePageModule } from '../../../home-page/home-page.module';

import { PublishHouseRoutingModule } from './publish-house-routing.module';

import { PublishHouseComponent } from './publish-house.component';
import { PublishBasicComponent } from './publish-basic.component';
import { PublishRoomComponent } from './publish-room.component';
import { PublishFacilityComponent } from './publish-facility.component';
import { PublishSiteComponent } from './publish-site.component';

@NgModule({
  declarations: [PublishHouseComponent, PublishBasicComponent, PublishRoomComponent,
    PublishFacilityComponent, PublishSiteComponent],
  imports: [
    ShareModule, ExhibitPageModule, HomePageModule,
    PublishHouseRoutingModule
  ]
})
export class PublishHouseModule { }
